import {Performance, SettingConfig} from "@icon-park/react";
import React from "react";

import StatusBarComponentsTime from "../components/StatusBarComponents/Time";

type statusBarType = {
    app: string
    components: React.ReactElement
}

const statusBar: statusBarType[] = [
    {
        app: "music",
        components: <Performance theme="outline" size="18" fill="#fff"/>
    },
    {
        app: "system-config",
        components: <SettingConfig theme="outline" size="18" fill="#fff"/>
    },
    {
        app: "time",
        components: <StatusBarComponentsTime></StatusBarComponentsTime>
    }
]

export default statusBar