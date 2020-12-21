import React, { useContext, useEffect, useMemo, useState } from "react"

/*
const ThemeContext = React.createContext({
    theme: "#000",
})

function SomethingC() {
    const { theme } = useContext(ThemeContext);
    return <div style={{ color: theme }}>Something C</div>
}

function SomethingB() {
    return <div>
        Something B
        <SomethingC/>
    </div>
}

function SomethingA() {
    return <div>
        <span>Something A</span>
        <SomethingB />
    </div>
}
*/

function doSomethingExpensive() {
    console.log("do something expensive")
    return "hello world";
}

export default function Testing() {
    const [cvalue, setCvalue] = useState(true)
    const [data] = useMemo(() => doSomethingExpensive(), [cvalue]); //execute when the cvalue is changed 
    const [value, setValue] = useState("");

    return (
        <div>
            Hello World
            <input type="text" value={value} onChange={e => setValue(e.currentTarget.value)} />
            <input type="checkbox" checked={cvalue} onChange={e => setCvalue(e.currentTarget.checked)} />
        </div>
    );
}