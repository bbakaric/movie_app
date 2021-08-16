import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import movieApi from '../../services/movieApi';
import posterApi from '../../services/posterApi';

const apiKey: string = '15917a5dc3c9b9fd8555303805fab8a5';

export const getMovies = (): object => async (dispatch: Dispatch) => {
  const response = await movieApi.get(
    `/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
  );
  dispatch({
    type: ActionType.GET_MOVIES,
    payload: response.data.results,
  });
};
