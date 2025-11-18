"use client";

import React from "react";
import skillCategory from "../../utils/skillCategory";
import SkillCategoryColor from "../../utils/SkillCategoryColor";

export default function highlightSkillsInText(text?: string) {
    if (!text) return null;

    const words = text.split(/(\s+)/);

    return (
        <>
            {words.map((word, i) => {
                const cleaned = word.replace(/^[.,;!?]+|[.,;!?]+$/g, "");

                let category = skillCategory(cleaned);

                if (!category && cleaned.includes(".")) {
                    const noDot = cleaned.replace(/\./g, "");
                    category = skillCategory(noDot);
                }

                if (!category && i + 2 < words.length) {
                const nextWord = words[i + 2]?.replace(/^[.,;!?]+|[.,;!?]+$/g, "") || "";
                const combined = `${cleaned} ${nextWord}`.trim();
                const combinedCategory = skillCategory(combined);
                if (combinedCategory) {
                    category = combinedCategory;
                    words[i + 2] = "";
                }
                }

                if (category) {
                    const { text: textColor } = SkillCategoryColor(category);
                    return (
                        <span key={i} className={`${textColor} font-semibold`}>
                            {word}
                        </span>
                    );
                }

                return <React.Fragment key={i}>{word}</React.Fragment>;
            })}
        </>
    );
}
