import React from "react";
import ReactMarkdown from 'react-markdown';


const kmom02 = `
Jag valde att hålla mitt registreringsformulär väldigt enkelt för att
underlätta för användaren. Jag kollade både på det som användes under
föreläsningen men även andra exempel som gavs i artiklarna vi läste.
Det finns fortfarande grejer som jag hade velat lägga till men tyvärr har
jag inte tid och tillräckligt med erfarenhet av ramverket för
att ge mig på det. Datepickern valde jag att göra så enkel som möjligt, mest
för jag kollade på exempel av hur man kan göra sin egen från grunden och det
verkade verkligen krångligt. Vilket resulterade i en inte så fin datepicker
men den fungerar åtminstonde.
`






function Report2() {
    return (
        <div>
        <h2>Kmom02</h2>
        <ReactMarkdown source={kmom02} />
        <br></br>
        <p><a href="https://github.com/Deel18/jsramverk">Visit the Github repo</a></p>
        </div>
    )
}


export default Report2;
