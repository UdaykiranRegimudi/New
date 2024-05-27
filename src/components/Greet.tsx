type GetProps = {
    name:any
}


export const Greet = (props:GetProps) =>{
    return(
        <div>
            <h2>Hello {props.name} How are you!</h2>
        </div>
    )
}