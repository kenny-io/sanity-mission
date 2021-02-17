export default {
    name: "dispatch",
    title: "Dispatch",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            name: "address",
            title: "Address",
            type: "string"

        }
    ]
}