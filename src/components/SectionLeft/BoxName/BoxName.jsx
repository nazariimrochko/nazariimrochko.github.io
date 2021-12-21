import React from 'react';
import s from '../SectionLeft.module.css'

const BoxName  = (props) => {
    return (
        <div className={s.box_name}>
            <h1 className={s.name}>{props.store.fullName}</h1>
            <h3>{props.store.profession}</h3>
        </div>
    );
};

export default BoxName;
