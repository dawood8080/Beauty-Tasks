import { useEffect, useRef } from "react"

type prevLinkProps = {
    type: string,
    text: string,
    // switchForm: () => void
}

export const PrevPageLink = (props: prevLinkProps) => {
    const ref = useRef(null)

    const switchContent = (event: MouseEvent): void => {
        event.preventDefault()
        const currForm = props.type === 'login'
        const currContent = ((event.currentTarget) as Element).closest(currForm ? '.login-container':'.register-container' )
        const nextContent = document.querySelector(currForm ? '.register-container' : '.login-container')
        nextContent?.classList.remove('hide-container')
        currContent?.classList.add('hide-container')
    }

    return (
        <a className={`${props.type}-link`} onClick={()=>switchContent} href="">{props.text}</a>
    )
}
