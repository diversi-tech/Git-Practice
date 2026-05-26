import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function ShifraZaafraniJokePage({ onBack }: PageProps) {

return (
        <div className={`joke-page ${styles.jokePage}`}>
            <p>{'איש אחד הולך ברחוב ורואה אדם יושב על המדרכה מחזיק שלט:'}</p>
            <p>{'"אני קבצן , תנו לי כסף בבקשה."'}</p>
            <p>{'האיש מתקרב אליו, נותן לו כסף ושואל אותו: "תגיד, למה אתה לא הולך לעבוד?"'}</p>
            <p>{'הקבצן עונה לו: "אני לא יכול לעבוד, אני קבצן!"'}</p>
            <button onClick={onBack}>Back</button>
        </div>
    );
}