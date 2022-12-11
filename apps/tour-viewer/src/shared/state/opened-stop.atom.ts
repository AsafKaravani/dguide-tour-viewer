import { atom } from 'recoil';
import { Stop } from '@app/shared/models/tour.type';

export const atom_openedStopState = atom<Stop | undefined>({
	key: 'Opened Stop',
	default: undefined,
});
