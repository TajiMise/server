import CommandArgument from '../res/CommandArgument.js';

/**
 * validate the argument with its laid out checks.
 */
export const validateArgument = (argument: string, schema: CommandArgument): Boolean => {
    try {
        if (schema.min && (!Number(argument) || Number(argument) < schema.min!))
            throw new Error('did not pass min test');
        if (schema.max && (!Number(argument) || Number(argument) > schema.max!))
            throw new Error('did not pass max test');
        if (schema.regex && !schema.regex.test(argument)) throw new Error('did not pass regex test');
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};
