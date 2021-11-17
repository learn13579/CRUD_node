const router = require('express').Router();

const {
    userControllers: {
        getUsers,
        getUserById,
        createUserAccount,
        updateUserAccount,
        deleteUserAccount
    }
} = require('../controllers');
const {
    userMiddleware: {
        userValidMiddleware,
        userIdMiddleware,
        userEmailMiddleware,
        updateMiddleware
    }
} = require('../middlewares');

router.get('/', getUsers);
router.post('/', userValidMiddleware, userEmailMiddleware, createUserAccount);

router.get('/:user_id', userIdMiddleware, getUserById);
router.put('/:user_id', updateMiddleware, userIdMiddleware, updateUserAccount);
router.delete('/:user_id', userIdMiddleware, deleteUserAccount);

module.exports = router;
