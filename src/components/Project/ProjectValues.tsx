export type OverviewProp = {
    overview?: string;
}
export function Overview({overview}: OverviewProp) {
    if (!overview) return null;
    return(
        <div>
            <h2 className="mt-4 text-xl font-bold"> Overview </h2>
            <p className="mt-2 whitespace-pre-line"> {overview} </p>
        </div>
    )
}

export type ProblemProp = {
    problem?: string;
}
export function Problem({problem}: ProblemProp) {
    if (!problem) return null;
    return(
        <div>
            <h2 className="mt-4 text-xl font-bold"> Problem </h2>
            <p className="mt-2 whitespace-pre-line"> {problem} </p>
        </div>
    )
}

export type SolutionProp = {
    solution?: string;
}
export function Solution({solution}: SolutionProp) {
    if (!solution) return null;
    return(
        <div>
            <h2 className="mt-4 text-xl font-bold"> Solution </h2>
            <p className="mt-2 whitespace-pre-line"> {solution} </p>
        </div>
    )
}

export type ArchitectureProp = {
    architecture?: string[];
}
export function Architecture({architecture}: ArchitectureProp) {
    if (!architecture || architecture.length === 0) return null;
    return(
        <div>
            <h2 className="mt-4 text-xl font-bold"> Architecture </h2>
            <ul className="mt-2 list-disc pl-5 space-y-2">
                {architecture.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export type ChallengesProp = {
    challenges?: string[];
}
export function Challenges({challenges}: ChallengesProp) {
    if (!challenges || challenges.length === 0) return null;
    return(
        <div>
            <h2 className="mt-4 text-xl font-bold"> Challenges </h2>
            <ul className="mt-2 list-disc pl-5 space-y-2">
                {challenges.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export type ImprovementsProp = {
    improvements?: string[];
}
export function Improvements({improvements}: ImprovementsProp) {
    if (!improvements || improvements.length === 0) return null;
    return(
        <div>
            <h2 className="mt-4 text-xl font-bold"> Improvements </h2>
            <ul className="mt-2 list-disc pl-5 space-y-2">
                {improvements.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export type FeaturesProp = {
    features?: string[];
}
export function Features({features}: FeaturesProp) {
    if (!features || features.length === 0) return null;
    return(
        <div className="card flex gap-5 flex flex-col">
            <h2 className="mt-4 text-xl font-bold"> Key Features </h2>
            <ul className="mt-2 list-disc pl-5 space-y-2">
                {features.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    )
}