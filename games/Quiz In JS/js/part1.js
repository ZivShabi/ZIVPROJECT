// part1.js

export const objPart1 = {

    titles: [
        'lesson1 - hello alert',
        'lesson2 - variables',
        'lesson3 - if else',
        'lesson4 - function',
        'lesson5 - return',
        'lesson6 - While',
        'lesson7 - For',
        'lesson8 - Array',
        'lesson9 - DOM/tasks',
        'lesson10 - DOM + Timing',
        'lesson11 - Timing + Date',
        'lesson12 - object',
        'lesson13 - JSON',
        "Lasson14 - LocalStorage",
        "Lasson15 - arrow-functions",
        "Lasson16 - setinterval,settimeout",
        "Lasson17 - callbacks,fetch",
        "Lasson18 - switch",
        "Lasson19 - promise,async-await ",
        "Lasson20 - student - class",
        "Lasson21 - prototype,gallery,",
        "Lasson22 -  fetch - login ",
        "Lasson23 - Date Objects",
    ],
    subTitles: [
        " מה ניתן לעשות ב ()alert ?",//ד   
        "איזו מההצהרות הבאות על משתנים נכונה ?",//ד
        "איזו מהפעולות הבאות אינה אפשרית עם הצהרות if-else JavaScript ?",//ג
        " איזה מהשמות הבאים אינו שם שמור לפונקציה ב JavaScript ?",//א
        " מה יהיה הערך המוחזר מהפונקציה function testReturn() {return;}",//ד
        "איזו מההצהרות הבאות לגבי לולאות ב-JavaScript היא נכונה?",//ב
        "איזו מההצהרות הבאות לגבי לולאת forEach ב-JavaScript היא נכונה?",//א
        "איזו מההצהרות הבאות לגבי מערכים ב-JavaScript היא נכונה?",//ג
        "איזו מההצהרות הבאות לגבי עבודה עם ה-DOM ב-JavaScript היא נכונה?",//ג
        "איזו מההצהרות הבאות לגבי עבודה עם ה-DOM ותזמון (Timing) ב-JavaScript היא נכונה?",//ב
        "איזו מההצהרות הבאות לגבי עבודה עם תזמון ותאריך ב-JavaScript היא נכונה?",//ב
        "איזו מההצהרות הבאות לגבי אובייקטים ב-JavaScript היא נכונה?",//א
        "איזו מההצהרות הבאות לגבי JSON ב-JavaScript היא נכונה?",//א
        "איזו מההצהרות הבאות לגבי Local Storage ב-JavaScript היא נכונה?",//ב
        "איזו מההצהרות הבאות לגבי פונקציות חץ ב-JavaScript היא נכונה?",//ג
        "איזו מההצהרות הבאות לגבי הפונקציות setTimeout ו- setInterval ב-JavaScript היא נכונה?",//א
        "איזו מההצהרות הבאות לגבי callbacks ו- fetch ב-JavaScript היא נכונה?",//ד
        "איזו מההצהרות הבאות לגבי מבנה switch ב-JavaScript היא נכונה?",//ד
        "איזו מההצהרות הבאות לגבי Promises ו-async/await ב-JavaScript היא נכונה?",//ב
        "איזו מההצהרות הבאות לגבי מחלקות (Classes) ב-JavaScript היא נכונה?",//ב
        " בפיתוח תוכנה, מהו תפקידו העיקרי של עיצוב אב - טיפוס(Prototype) בתהליך ה - Gallery ?",//ד
        'מהי תפקודה של פונקציית fetch בתהליך התחברות באמצעות JavaScript?',//ג
        'מהי תפקודה של Date Objects ב-JavaScript?',//א
    ],
    questions: ["סמן את התשובה"],
    options: [


        'א. לשלוח לדף הערה עם טקסט',
        'ב. לעצור את הדף ולתת הערה עם טקסט',
        'ג. לשלוח לקונסול אהרה עם טקסט',
        'ד. גם תשובה א וגם תשובה ב',

        'א. משתנה שהוגדר באמצעות var הוא בעל תחום בלוק (block scope)',
        'ב. משתנה שהוגדר באמצעות let הוא בעל תחום פונקציה (function scope) ',
        'ג. משתנה שהוגדר באמצעות const ניתן לשנות את ערכו לאחר ההגדרה הראשונית',
        'ד. משתנה שהוגדר באמצעות let הוא בעל תחום בלוק (block scope)',

        'א. ביצוע פעולות שונות בהתאם לתנאים שונים ',
        'ב. השוואת מספרים ובדיקת תנאים לוגיים',
        'ג. יצירת לולאות חוזרות ונשנות ',
        'ד. ביצוע השמה של ערכים למשתנים',

        'א. calculate ',
        'ב. eval ',
        'ג. return',
        'ד. function',

        'א. מחרוזת ריקה (""), כי הפונקציה לא מחזירה כלום ',
        'ב. הערך undefined, כי הפונקציה מחזירה כלום באופן מפורש',
        'ג. הערך null, כי הפונקציה לא מחזירה ערך',
        'ד. השגיאה SyntaxError, כי לא ניתן להשתמש ב- בלי ערך מוחזר',

        'א. לולאת תמיד תבוצע לפחות פעם אחת',
        'ב. לולאת do...while תתבצע לפחות פעם אחת, גם אם התנאי בתחילתה הוא false',
        'ג. לולאת while לא יכולה להכיל תנאים מורכבים ',
        'ד. לולאת for...in משמשת לאיטרציה על ערכי מערך (array values)',

        'א. forEach עוברת על כל אלמנט במערך ומפעילה פונקציית callback  על כל אחד מהם',
        'ב. forEach לא מקבלת פונקציית callback ',
        'ג. forEach עוברת על אובייקטים (objects) ולא על מערכים (arrays) ',
        'ד. forEach יכולה לעצור את הלולאה עם פקודת break',

        'א. מערך ב -JavaScript יכול להכיל רק סוג אחד של נתונים (לדוגמה, רק מספרים או רק מחרוזות)',
        'ב. אורך של מערך ב -JavaScript הוא קבוע ואינו יכול להשתנות לאחר שהמערך נוצר',
        'ג. ניתן להוסיף אלמנטים למערך ב -JavaScript באמצעות המתודה push ',
        'ד. ניתן לגשת לאלמנט האחרון במערך על ידי שימוש באינדקס -1',

        'א. ניתן להשתמש ב -DOM כדי לשנות את מבנה ה- של הדף רק בזמן הטעינה הראשונית של הדף',
        'ב. document.getElementById מחזירה רשימה של כל האלמנטים המתאימים ב-DOM ',
        'ג. document.createElement משמשת ליצירת אלמנט HTML חדש ב-DOM ',
        'ד. אי אפשר לשנות את תוכן הטקסט של אלמנט ב -DOM באמצעות JavaScript ',

        'א. ניתן להשתמש ב -setTimeout כדי לחזור על פעולה כל מספר קבוע של מילישניות',
        'ב. setInterval משמשת לביצוע פעולה כל מספר קבוע של מילישניות',
        'ג. clearInterval משמשת לביטול פעולת תזמון שהוגדרה עם setTimeout ',
        'ד. אי אפשר לשנות את ה -DOM מתוך פונקציית callback של setTimeout ',

        'א. האובייקט Date ב-JavaScript מתחיל את הספירה שלו מהשנה 2000',
        'ב. ניתן להשתמש ב -setTimeout כדי לבצע פעולה כל מספר קבוע של מילישניות',
        'ג. הפונקציה setInterval מבצעת פעולה אחת בלבד לאחר זמן קבוע',
        'ד. המתודה getFullYear של אובייקט Date מחזירה את החודש הנוכחי',

        'א. ניתן להוסיף תכונה חדשה לאובייקט לאחר יצירתו',
        'ב. אובייקטים ב -JavaScript לא יכולים להכיל פונקציות בתור ערכים של תכונות',
        'ג. יש לגשת לתכונות של אובייקט באמצעות סוגריים מרובעים בלבד',
        'ד. כל המפתחות של אובייקט ב -JavaScript חייבים להיות מספרים',

        'א. JSON הוא פורמט טקסטואלי המשמש לשמירה והעברת מידע בין שרת ולקוח',
        'ב. ב-JSON ניתן להשתמש בפונקציות כערכים של מאפיינים באובייקטים',
        'ג. ניתן להשתמש בהערות בתוך קבצי JSON ב-JavaScript ',
        'ד. JSON מאפשר לשמור נתונים בפורמט בינארי',

        'א. Local Storage הוא מנגנון השמירה בדפדפן המאפשר שמירת מידע בפורמט בינארי',
        'ב. מידע שמאוחסן ב -Local Storage נשאר זמין גם לאחר סגירת הדפדפן',
        'ג. ניתן לשמור רק מחרוזות ב -Local Storage, ולא אובייקטים או מערכים',
        'ד. ניתן לשנות מידע ב -Local Storage רק בקובץ ה-HTML עצמו',

        'א. פונקציות חץ אינן יכולות להיות מתודות של אובייקט',
        'ב. פונקציות חץ אינן משתמשות במילת המפתח function ',
        'ג. פונקציות חץ אינן מצביעות ל -this שלהן באופן אוטומטי',
        'ד. פונקציות חץ אינן מאפשרות להעביר פרמטרים ללא צורך בסוגריים',

        'א. הפונקציה setTimeout מפעילה פעולה פעם אחת לאחר זמן קבוע, בעוד ש-setInterval מפעילה אותה פעולה מחדש באופן מחזורי לאורך זמן',
        'ב. אם פונקציה מועברת כארגומנט לפונקציה setTimeout או setInterval, יש להעביר את הפונקציה בלבד, בלי לציין את הסוגריים',
        'ג. הפונקציה setInterval מפעילה את הפעולה שניתנת לה כארגומנט באופן אוטומטי כאשר הדף נטען',
        'ד. הפונקציה setTimeout משנה את זמן ההפעלה שלה על פי פרמטר שנמסר בקריאה לה',

        'א. פונקציה fetch מחזירה תוצאה סטטית, ולא ניתן להשתמש ב-callbacks איתה',
        'ב. Callback הוא פונקציה המופעלת לפני קריאת fetch ',
        'ג. פונקציה fetch משמשת לבצע קריאות רשת אסינכרוניות ולקבלת מידע משרת רחוק',
        'ד. Callback הוא פונקציה שמועברת כארגומנט לפונקציה אחרת ומופעלת לאחר השלמת פעולת הקריאה',

        'א. הביטויים case במבנה switch  יכולים להיות רק מספרים שלמים',
        'ב. מבנה switch נמוך לקריאה וניתן להשתמש בו תמיד במקום if-else ',
        'ג. במבנה switch ניתן להשתמש רק עבור תנאים מוחלטים (exact conditions) ',
        'ד. במקרה שבו אין התאמה במבנה switch, הוא יבצע את התנאי הבא (default) בכל מקרה',

        'א. Promises מייצגות כלי לטיפול בקריאות אסינכרוניות ובניית רצפי קריאות',
        'ב. באמצעות async/await ניתן להפוך פונקציות למסומנות בכיחודיות ולבצע קריאות אסינכרוניות בצורה נקייה ומובנית',
        'ג. פונקציות async  יכולות להחזיר ישירות את הערך המחזיר, בניגוד לפונקציות שעשויות להחזיר ערך אחר',
        'ד. Promises ו-async/await הן תכונות המאפשרות לקרוא לפונקציות באופן סינכרוני בלבד',

        'א. מחלקה (Class) היא כלי שמאפשר ליצור אובייקטים רבים באמצעות קונסטרוקטור ופונקציות קבועות (methods) ',
        'ב. באמצעות מחלקות ב -JavaScript ניתן ליצור ירושה (inheritance) וקוד נקי ומנוסח',
        'ג. כל האובייקטים הנוצרים מאותה מחלקה (Class) משתמשים באותו הקונסטרוקטור והפונקציות הקבועות',
        'ד. מחלקה (Class) ב-JavaScript ניתנת לשימוש רק עם מנועי גרסאות חדשות יותר, כגון V8 או SpiderMonkey ',

        'א. ליצור מסד נתונים ראשוני לאפליקציה',
        'ב. להציג תצוגות מקדימות של גרפיקות ועיצובים',
        'ג. לבדוק ולתקן שגיאות בקוד לפני ההפצה',
        'ד. לספק גרסה מתפקדת מינימלית של המוצר להדגמת הפונקציונליות ללקוחות ולמשקיעים',

        'א. לאפשר גישה לתוכן של דף אינטרנט מסוים',
        'ב. לבצע קריאות רשת אסינכרוניות ולשלוף מידע משרת רחוק',
        'ג. לבצע אימות ואימות של פרטי המשתמש על ידי שליחת פרטים לשרת ובדיקתם',
        'ד. לשלוף סטטוס קוד מהשרת בכדי לאמת את תקינות פרטי ההתחברות',

        'א. לאפשר יצירה וניהול של תאריכים ושעות בפורמטים שונים',
        'ב. לבצע פעולות מתמטיות על תאריכים ושעות, כמו חיבור, חיסור, וחילוק',
        'ג. ליצור אירועים על בסיס תאריך ושעה מסוימים ולהתעדכן בהתאם',
        'ד. לאפשר הצגה ופירוט מידע אודות התאריך והשעה הנוכחיים',

    ],
    correctAnswersOrder: ['ד', 'ד', 'ג', 'א', 'ד', 'ב', 'א', 'ג', 'ג', 'ב', 'ב', 'א', 'א', 'ב', 'ג', 'א', 'ד', 'ד', 'ב', 'ב', 'ד', 'ג', 'א'],

    lis1: ["נכון", "לא נכון"],
    lis2: ["נכון", "לא נכון"],
    lis3: ["נכון", "לא נכון"],
    lis4: ["נכון", "לא נכון"],
};
const results = [];

function displayTotalScore() {
    const totalScore = results.reduce((acc, cur) => acc + cur, 0);
    console.log(`Total Score: ${totalScore}`);
}
displayTotalScore();