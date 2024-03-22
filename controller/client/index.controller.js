exports.indexRenderAction = async (req, res) => {
    try {
        res.render('client/home');
    } catch (error) {
        console.log(error.message);
    }
}

exports.applyNowRenderAction = async (req, res) => {
    try {
        res.render('client/applynow')
    } catch (error) {
        console.log(error.message);
    }
}

exports.govtSolutionRenderAction = async (req, res) => {
    try {
        res.render('client/govt-sol')
    } catch (error) {
        console.log(error.message);
    }
}

exports.aboutUsRenderAction = async (req, res) => {
    try {
        res.render('client/about-us')
    } catch (error) {
        console.log(error.message);
    }
}

exports.contactUsRenderAction = async (req, res) => {
    try {
        res.render('client/contact-us')
    } catch (error) {
        console.log(error.message);
    }
}

exports.clientRenderAction = async (req, res) => {
    try {
        res.render('client/client')
    } catch (error) {
        console.log(error.message);
    }
}

exports.referFriendRenderAction = async (req, res) => {
    try {
        res.render('client/refer-frnd')
    } catch (error) {
        console.log(error.message);
    }
}

exports.benefitRenderAction = async (req, res) => {
    try {
        res.render('client/benefits')
    } catch (error) {
        console.log(error.message);
    }
}