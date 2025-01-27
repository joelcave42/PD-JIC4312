const isAuthenticated = (req, res, next) => {
    if (!req.session.userId) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }
    next();
};

const isSupervisor = (req, res, next) => {
    if (!req.session.accountType || req.session.accountType !== 'supervisor') {
        return res.status(403).json({ success: false, message: 'Access Denied' });
    }
    next();
};

module.exports = { isAuthenticated, isSupervisor };