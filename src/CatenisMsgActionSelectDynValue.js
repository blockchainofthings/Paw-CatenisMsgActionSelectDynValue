/**
 * Created by claudio on 19/06/17.
 */

@registerDynamicValueClass
class CatenisMsgActionSelectDynValue {

    static identifier = 'com.blockchainofthings.PawExtensions.CatenisMsgActionSelectDynValue';
    static title = 'Catenis Message Action Selection';
    static inputs = [
        DynamicValueInput('action', 'Action', "Select", {
            "choices": {
                "log": "1 - Log",
                "send": "2 - Send",
                "any": "3 - Any"
            }
        })
    ];

    evaluate(context) {
        return this.action;
    }

    title(context) {
        return 'Select';
    }

    text(context) {
        return this.action;
    }
}
