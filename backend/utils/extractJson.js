const extractJson = (text) => {
    if (!text) return null;

    try {
        const cleaned = text
            .replace(/```json/gi, "")
            .replace(/```/g, "")
            .trim();

        const start = cleaned.indexOf("{");
        const end = cleaned.lastIndexOf("}");

        if (start === -1 || end === -1) {
            return null;
        }

        const json = cleaned.slice(start, end + 1);

        return JSON.parse(json);

    } catch (err) {
        console.error("JSON Parse Error:");
        console.error(err.message);

        return null;
    }
};

export default extractJson;
