const { User } = require('../../src/app/models');
const bcrypt = require('bcryptjs');
const truncate = require('../utils/truncate');

describe('User', () => {
    beforeEach(async () => await truncate());

    it('should encrypt user password', async () => {
        const user = await User.create({
            name: 'Douglas',
            email: 'douglas.marques@codeminer42.com',
            password: 'C0DEm1n3r'
        })

        const compareHash = await bcrypt.compare('C0DEm1n3r', user.password_hash);

        expect(compareHash).toBe(true);
    })
})