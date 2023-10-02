export type TMonthsProps = {
    arrayData: any;
    month: number;
    year: number;
};

export type TSettingsBarViewProps = {
    month: { value: number; set: any };
    year: { value: number; set: any };
    userData: any;
    currentMonth: any;
    props: any;
};

export type TMonthYearSelectorProps = {
    month: { value: number; set: any };
    year: { value: number; set: any };
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
    id: string;
    note: string | undefined;
    dayNum: number;
    date: any;
};


export type GrafkBody = {
    user: string | null,
    id: string | null
}