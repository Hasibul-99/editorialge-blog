export const addActiveClass = (e, className="") => {
    if (e) {
        e.classList.add(className);
    }
}

export const removeActiveClass = (e, className = "") => {
    if (e ) {
        e.classList.remove(className);
    }
} 