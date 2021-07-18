function getBotResponse(input) {
    //rock paper scissors
    if (input == "what is vaccine") {
        return "Vaccine: A product that stimulates a person's immune system to produce immunity to a specific disease, protecting the person from that disease. Vaccines are usually administered through needle injections, but can also be administered by mouth or sprayed into the nose.";
    } else if (input == "who can get a COVID-19 vaccine") {
        return "All adults aged 18 or over can now get vaccinated against COVID-19.You do not need to wait to be contacted by the NHS.If you were contacted but have not booked your appointments, you're still eligible and can book your appointments anytime.";
    } else if (input == "how to get your COVID-19 vaccine") {
        return "The COVID-19 vaccines currently available are given in 2 doses. You usually have the 2nd dose 8 to 12 weeks after the 1st dose.To get your vaccine you can:book your COVID-19 vaccination appointments online for an appointment at a vaccination centre or pharmacyfind a walk-in COVID-19 vaccination site to get vaccinated without needing an appointment wait to be contacted by your GP surgery and book your appointments with them";
    } else if (input == "side effects and safety") {
        return "The COVID-19 vaccines approved for use in the UK have met strict standards of safety, quality and effectiveness.They can cause some side effects, but not everyone gets them.Any side effects are usually mild and should not last longer than a week, such as: a sore arm from the injection ,feeling tired ,a headache ,feeling achy ,feeling or being sick"
    } else if (input == "which vaccine will I get?") {
        return "You cannot usually choose which vaccine you have. When you book, you'll only be offered appointments for vaccines that are suitable for you. Most people can have any of the COVID-19 vaccines, but some people are only offered certain vaccines."
    } else if(input == "types of vaccine") {
        return "The COVID-19 vaccines currently approved for use in the UK are: Moderna vaccine ,Oxford/AstraZeneca vaccine ,Pfizer/BioNTech vaccine ,Janssen vaccine (available later this year)"
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }

}