import { atom } from 'recoil';
import { Tour } from '@app/shared/models/tour.type';

export const atom_tourState = atom<Tour | undefined>({
	key: 'Tour',
	default: undefined,
});
