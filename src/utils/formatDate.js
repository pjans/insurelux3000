const formatDate = dateString => {
    let date = new Date(dateString);
    return date.toLocaleDateString("nb-NO")
}

export default formatDate;