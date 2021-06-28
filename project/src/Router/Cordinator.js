
export const goToSearchUser = (history) => {
    history.push(`/`)
}

export const goToUserInfo = (history, user) => {
    history.push(`/${user}`)
}

export const goToUserRepos = (history, user) => {
    history.push(`/${user}/repos`)
}

export const goToUserStarreds = (history, user) => {
    history.push(`/${user}/starred`)
}