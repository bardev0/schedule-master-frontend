
export type TMonthsProps = {
    array: Array<any>;
    currentDisplay: number;
};

export type TViewProps = {
    currentMonth: any;
    props: any;
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

export type TAddOffProps = {
    state: any;
};
export type Roles = "Admin" | "Consumer";

export type TNotesObj = {
    note: string | undefined;
    dayNum: number;
    date: any;
};
