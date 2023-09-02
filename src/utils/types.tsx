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
    state: any;
    userId: string;
    userSetter: any;
    user: any;
};

export type Roles = "Admin" | "Consumer";
