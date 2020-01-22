// MARK: React
import * as React from "react";
import "./style.scss";
import axios from "axios";
import Loading from "../../components/Loading";

interface IMovie {
	title: string;
	poster: string;
	release: string;
}

interface IProps { }

interface IState {
	movies: IMovie[];
	load: boolean;
	page: number;
}

export default class MovieCard extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			movies: [],
			load: true,
			page: 1,
		};
	}

	private fetchMovies = async (page: number) => {
		this.setState({
			load: true,
			movies: [],
		});

		const movies = await this.api.getAllMovies(page);
		if (!movies) {
			alert("Algo deu errado!");
		} else {
			this.setState({
				movies,
				load: false,
			});
		}
	};

	public async componentDidMount() {
		await this.fetchMovies(1);
	}

	public previousButton = async () => {
		let { page } = this.state;

		if (page > 1) {
			page = page - 1;
		}
		await this.fetchMovies(page);
		this.setState({ page });
	}

	public nextButton = async () => {
		let { page } = this.state;

		page = page + 1;

		await this.fetchMovies(page);
		this.setState({ page });
	}

	public api = {
		getAllMovies: async (page: number): Promise<IMovie[]> => {
			const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2e3451f400721740f2d2d0933c9147c4&language=en-US&page=${page}`);
			const data = res.data;
			return data["results"].map((movie) => {
				return {
					title: movie["original_title"],
					poster: movie["poster_path"],
					release: movie["release_date"],
				};
			});
		},
	};

	public render() {
		return (
			<div className="container">
				{this.state.load &&
					<Loading />
				}
				<div className="containerMoviesContainer">
					{this.state.movies.map((movie) => (
						<div className="containerMoviesContainerMovieCard">
							<div className="containerMoviesContainerMovieCardImage">
								<img src={`https://www.topflix.film/movies/static/img/original/${movie.poster}`} />
							</div>
							<div className="containerMoviesContainerMovieCardInfo">
								<p>{movie.title}</p>
								<p>{movie.release}</p>
							</div>
						</div>
					))}
				</div>
				{this.state.load ?
					null
					:
					<div className="containerArrow">
						<div className="containerArrowLeft">
							<img onClick={this.previousButton}
								src="https://image.flaticon.com/icons/svg/54/54321.svg" />
						</div>
						<div className="containerArrowRigth">
							<img onClick={this.nextButton} 
							src="https://image.flaticon.com/icons/png/512/130/130884.png" />
						</div>
					</div>
				}
			</div>
		);
	}
}
