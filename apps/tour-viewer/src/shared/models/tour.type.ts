export interface LastUpdate {
  seconds: number;
  nanoseconds: number;
}

export interface AllMedia {
  type: string;
  url: string;
  order: number;
  name: string;
  poster_url: string;
  profile?: boolean;
  poster_name: string;
}

export interface TourGuide {
  full_name: string;
  profile_image: string;
  email: string;
  id: string;
}

export interface HoursRange {
  min: number;
  max: number;
}

export interface StartingPoint {
  longitude: number;
  latitude: number;
}

export interface CreatedDate {
  seconds: number;
  nanoseconds: number;
}

export interface ApprovalDate {
  seconds: number;
  nanoseconds: number;
}

export interface TourImageObj {
  title: string;
  url: string;
  name: string;
  type: string;
}

export interface CreatedDate2 {
  seconds: number;
  nanoseconds: number;
}

export interface StopLocation {
  latitude: number;
  longitude: number;
}

export interface LocPic {
  title: string;
  name: string;
  url: string;
  order: number;
  type: string;
}

export interface Option {
  isAnswer: boolean;
  option: string;
}

export interface AllMedia2 {
  poster_name: string;
  type: string;
  poster_url: string;
  order: number;
  title: string;
  url: string;
  name: string;
  content: string;
  options: Option[];
  question_text: string;
}

export interface Stop {
  created_date: CreatedDate2;
  s_smallDesc: string;
  stop_index: number;
  stop_location: StopLocation;
  type: string;
  loc_pics: LocPic[];
  s_title: string;
  all_media: AllMedia2[];
  diraction_text: string;
  direction_text: string;
  location: any;
  order: number;
  tags: string[];
  id: string;
}

export type Tour = {
  hostedBy: string;
  last_update: LastUpdate;
  all_media: AllMedia[];
  description: string;
  tour_image: string;
  distance: number;
  tour_guide: TourGuide;
  exp_video: string;
  type: string[];
  equipment: string[];
  language: string;
  hours_range: HoursRange;
  price: string;
  starting_point: StartingPoint;
  difficulty: string;
  id: string;
  created_date: CreatedDate;
  duration: number;
  notes: string | string[];
  approval_date: ApprovalDate;
  location: any;
  title: string;
  main_sentense: string;
  tour_image_obj: TourImageObj;
  audience: string[];
  stops: Stop[];
};
