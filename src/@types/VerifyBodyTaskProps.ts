interface VerifyBodyTaskProps {
    id?: string;
    text?: string;
    type: 
        "isTodayNumber" 
        | 
        "isTodayBoolean" 
        |
        "isIdNumber"
        |
        "isIdBoolean"
        |
        "isTextNumber"
        |
        "isTextBoolean"
        ;
}

export default VerifyBodyTaskProps;