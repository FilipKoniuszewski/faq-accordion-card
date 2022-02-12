window.addEventListener("load", e=> {

    const questionContainers = document.querySelectorAll(".question-container");

    let toggleFaq = (e) => {
        let answer = e.currentTarget.children[1];
        let question = e.currentTarget.children[0];
        let arrowIcon = question.children[1]
        questionContainers.forEach((questionContainer) => {
            if (questionContainer !== e.currentTarget &&
                questionContainer.children[0].children[1].style.display !== "none") {
                    disActiveOthers(questionContainer)
            }
        })
        if (answer.style.display === "none") {
            answer.style.display = "block";
            question.style.fontWeight = "700";
            arrowIcon.style.transform = "rotate(180deg)";
        } else {
            answer.style.display = "none";
            question.style.fontWeight = "400";
            arrowIcon.style.transform = "rotate(0deg)";
        }

    }
    function disActiveOthers(questionContainer) {
        let question = questionContainer.children[0]
        let answer = questionContainer.children[1]
        let arrowIcon = question.children[1]
        answer.style.display = "none";
        question.style.fontWeight = "400";
        arrowIcon.style.transform = "rotate(0deg)";
        question.classList.remove("question-active")
    }
    questionContainers.forEach((question) => question.addEventListener("click", toggleFaq))
});
