import { TUserConsumer } from "../../../grafik-backend/src/types";

export type TMonthsProps = {
    array: Array<any>;
    currentDisplay: number;
};

export type TViewProps = {
    props: any;
    states: Array<any>;
    mainSettings: Array<any>;
};

export type TEditUsersView = {
    state: any;
};

export type TMainSettingsView = {
    state: any;
};

export type TEditSingleUserView = {
    user: TUserConsumer | undefined;
    state: any;
    userState: any;
};
