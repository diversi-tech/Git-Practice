import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function EfratMadmonJokePage({onBack}:PageProps){
    return (
        <div className={`joke-page ${styles.jokePage}`}>
            <p>חמישה שקלים</p>
            <p>איש אחד הולך ברחוב ורואה אדם יושב על המדרכה ומחזיק שלט: "אנא עזרו לי, חסרים לי 10 שקלים לאוטובוס הביתה".

האיש מרחם עליו, מוציא שטר של 50 שקלים, נותן לו ואומר: "הנה, קח 50 שקלים ותביא איתך עוד ארבעה חברים!"</p>
            <button onClick={onBack}>← Back</button>
        </div>
    )
}