# Routes

## `/boms`
Supports:
- `GET` - Retrieves a list of BOMs
- `POST`- Creates a new BOM
- `GET` - Updates an existing BOM

### Examples

Request: `GET /boms`

Response:
```
[
    {
        "id": "123",
        "clientName": "Client Name",
        "status": "Feasibility Check",
        "funamentals": [
            "easyToBuy": "false",
            "fixTheBasics": "false",
        ]
        "links": [
            {
                "rel": "jira-epic",
                "href": "https://efundamentals.atlassian.net/browse/BOM-460"
            },
            {
                "rel": "jira-epic",
                "href": "https://efundamentals.atlassian.net/browse/BOM-460"
            }

        ]
    },
    {
        "id": "124",
        "clientName": "Client Name",
        "links": [
            {
                "rel": "jira-epic",
                "href": "https://efundamentals.atlassian.net/browse/BOM-460"
            }
        ]
    }

]
```