import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import movieApi from '../../services/movieApi';

const apiKey: string = '15917a5dc3c9b9fd8555303805fab8a5';

export const getMovies = (): any => async (dispatch: Dispatch) => {
  const response = await movieApi.get(
    `/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
  );
  dispatch({
    type: ActionType.GET_MOVIES,
    payload: response.data.results,
  });
};

export const loadMovies =
  (page: number): any =>
  async (dispatch: Dispatch) => {
    const response = await movieApi.get(
      `/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`,
    );
    dispatch({
      type: ActionType.LOAD_MOVIES,
      payload: response.data.results,
    });
  };

export const showModal = (show) => async (dispatch: Dispatch) => {
  dispatch({
    type: ActionType.SHOW_MODAL,
    payload: show,
  });
};
