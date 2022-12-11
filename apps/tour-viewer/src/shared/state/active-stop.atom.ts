import { atom } from 'recoil';
import { Stop } from '@app/shared/models/tour.type';

export const atom_activeStopState = atom<Stop | undefined>({
	key: 'Active Stop',
	default: undefined,
});
