import React, {useEffect, useState} from 'react';
import Styles from './index.module.scss'

const DateTime: React.FC = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const formatDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = {
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            hour: '2-digit',
            minute: '2-digit'
        };
        return new Intl.DateTimeFormat('zh-CN', options).format(date);
    };

    return (
        <div className={Styles.time}>
            {formatDate(currentTime)}
        </div>
    );
};

export default DateTime;
