import React from "react";


export function DoneButton(props) {
    const []= React.useState(props.start);

    function ButtonClick() {
        console.log();
    }

    return <button>
        {ButtonClick}

        {props.defaultClick}{}


    </button>

}
