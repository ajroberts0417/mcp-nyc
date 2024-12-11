Here is a giant markdown document with all API docs for the Legistar Web API. Please use this as context to help yourself construct Legistar Web API requests

---
Title: Examples & General Context on The Legistar Web API

URL Source: https://webapi.legistar.com/Home/Examples

Markdown Content:
These examples will help you get started with the Legistar Web API. To use the URLs below, replace {Client} with your client name. Some clients require use of an [API Token](https://webapi.legistar.com/Home/Examples#tokens).

To see all agenda matters, the endpoint is:

https://webapi.legistar.com/v1/{Client}/matters

Note that queries replies are limited to 1000 responses. Even with this limit, some calls may return a large amount of data. To make this query more performant by limiting reults to a smaller set of items or to obtain more items via a second query, use ODATA parameters to page the output like this:

https://webapi.legistar.com/v1/{Client}/matters?$top=10&$skip=0
https://webapi.legistar.com/v1/{Client}/matters?$top=10&$skip=10

ODATA can also use filters to find more specific data. For instance, this query will return only events during the month of September, 2014:

https://webapi.legistar.com/v1/{Client}/events?$filter=EventDate+ge+datetime%272014-09-01%27+and+EventDate+lt+datetime%272014-10-01%27

The basics of the ODATA URL setup are here: [https://www.odata.org/documentation/odata-version-3-0/url-conventions/](https://www.odata.org/documentation/odata-version-3-0/url-conventions/)

The ODATA documentation does not cover all features, including the convenience method datetime’2014-09-01’ shown above.

To see actions taken on a Matter (like a vote), look at the [Matter Histories](https://webapi.legistar.com/Help/Api/GET-v1-Client-Matters-MatterId-Histories_AgendaNote_MinutesNote) endpoint. Filtering these items by MatterHistoryActionBodyName can help to limit the found actions to just those votes performed by a certain group, for instance just to votes made by the Common Council on a matter 1234:

https://webapi.legistar.com/v1/{Client}/matters/1234/histories?$filter=MatterHistoryPassedFlag%20ne%20null%20and%20MatterHistoryActionBodyName%20eq%20%27Common%20Council%27

To then see the vote tally, use the returned Id (5678 in this example) with the EventItems Votes endpoint:

https://webapi.legistar.com/v1/{Client}/eventitems/5678/votes

There are many other items and relationships in the API. If you have a specific use case, we’d be happy to help you find the appropriate calls.

Tips
----

*   http and https are both supported for GETs – please use as appropriate for your data and consumer.
*   Items returned to GET requests are limited to those items marked as public and available for view on InSite.
*   Limiting queries by paging and filtering will reduce both the load on the server and the time needed to return the requested data.
*   Fields in the API do not reflect any label customization done for your specific site. If you need help identifying a field’s relationship to your specific Legistar configuration, please ask.
*   For an especially busy site, ordering by item IDs and paging with a filter GT (greater than) the highest returned ID in a set may be more stable. If you find you are occasionally missing items in long list queries, this is worthwhile to investigate, but slightly more complex.

Tokens
------

Some clients require use of API tokens for access. If the read-only operations above give an unauthorized response, please refer to that client for their token policy.

If you have a token, it can be provided as a URL parameter to the https endpoint of this API.

For example:

https://webapi.legistar.com/v1/{Client}/matters?token=verylongbase64token

* * *



Title: GET v1/{Client}/Actions

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Actions

Markdown Content:
Gets all Actions.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusAction](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusAction)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| ActionId |  | integer | None.
 |
| ActionGuid |  | string | None.

 |
| ActionLastModifiedUtc |  | date | None.

 |
| ActionRowVersion |  | Collection of byte | None.

 |
| ActionName |  | string | Required

String length: inclusive between 1 and 255

 |
| ActionActiveFlag |  | integer | None.

 |
| ActionUsedFlag |  | integer | None.

 |

### Response Formats

**Sample:**

\[
  {
    "ActionId": 1,
    "ActionGuid": "sample string 2",
    "ActionLastModifiedUtc": "2024-12-11T17:18:44.0920703-05:00",
    "ActionRowVersion": "QEA=",
    "ActionName": "sample string 4",
    "ActionActiveFlag": 5,
    "ActionUsedFlag": 6
  },
  {
    "ActionId": 1,
    "ActionGuid": "sample string 2",
    "ActionLastModifiedUtc": "2024-12-11T17:18:44.0920703-05:00",
    "ActionRowVersion": "QEA=",
    "ActionName": "sample string 4",
    "ActionActiveFlag": 5,
    "ActionUsedFlag": 6
  }
\]

**Sample:**

<ArrayOfGranicusAction xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusAction\>
    <ActionActiveFlag\>5</ActionActiveFlag\>
    <ActionGuid\>sample string 2</ActionGuid\>
    <ActionId\>1</ActionId\>
    <ActionLastModifiedUtc\>2024-12-11T17:18:44.0920703-05:00</ActionLastModifiedUtc\>
    <ActionName\>sample string 4</ActionName\>
    <ActionRowVersion\>QEA=</ActionRowVersion\>
    <ActionUsedFlag\>6</ActionUsedFlag\>
  </GranicusAction\>
  <GranicusAction\>
    <ActionActiveFlag\>5</ActionActiveFlag\>
    <ActionGuid\>sample string 2</ActionGuid\>
    <ActionId\>1</ActionId\>
    <ActionLastModifiedUtc\>2024-12-11T17:18:44.0920703-05:00</ActionLastModifiedUtc\>
    <ActionName\>sample string 4</ActionName\>
    <ActionRowVersion\>QEA=</ActionRowVersion\>
    <ActionUsedFlag\>6</ActionUsedFlag\>
  </GranicusAction\>
</ArrayOfGranicusAction\>

**Sample:**

(\[{"ActionId":1,"ActionGuid":"sample string 2","ActionLastModifiedUtc":"2024-12-11T17:18:44.0920703-05:00","ActionRowVersion":"QEA=","ActionName":"sample string 4","ActionActiveFlag":5,"ActionUsedFlag":6},{"ActionId":1,"ActionGuid":"sample string 2","ActionLastModifiedUtc":"2024-12-11T17:18:44.0920703-05:00","ActionRowVersion":"QEA=","ActionName":"sample string 4","ActionActiveFlag":5,"ActionUsedFlag":6}\]);

Title: GET v1/{Client}/Bodies

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Bodies

Markdown Content:
Gets all Bodies.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusBody](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusBody)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| BodyId |  | integer | None.
 |
| BodyGuid |  | string | None.

 |
| BodyLastModifiedUtc |  | date | None.

 |
| BodyRowVersion |  | Collection of byte | None.

 |
| BodyName |  | string | Required

String length: inclusive between 1 and 255

 |
| BodyTypeId |  | integer | Required

 |
| BodyTypeName |  | string | None.

 |
| BodyMeetFlag |  | integer | None.

 |
| BodyActiveFlag |  | integer | None.

 |
| BodySort |  | integer | None.

 |
| BodyDescription |  | string | None.

 |
| BodyContactNameId |  | integer | None.

 |
| BodyContactFullName |  | string | None.

 |
| BodyContactPhone |  | string | None.

 |
| BodyContactEmail |  | string | None.

 |
| BodyUsedControlFlag |  | integer | None.

 |
| BodyNumberOfMembers |  | integer | None.

 |
| BodyUsedActingFlag |  | integer | None.

 |
| BodyUsedTargetFlag |  | integer | None.

 |
| BodyUsedSponsorFlag |  | integer | None.

 |

### Response Formats

**Sample:**

\[
  {
    "BodyId": 1,
    "BodyGuid": "sample string 2",
    "BodyLastModifiedUtc": "2024-12-11T17:45:07.9787688-05:00",
    "BodyRowVersion": "QEA=",
    "BodyName": "sample string 4",
    "BodyTypeId": 5,
    "BodyTypeName": "sample string 6",
    "BodyMeetFlag": 7,
    "BodyActiveFlag": 8,
    "BodySort": 9,
    "BodyDescription": "sample string 10",
    "BodyContactNameId": 1,
    "BodyContactFullName": "sample string 11",
    "BodyContactPhone": "sample string 12",
    "BodyContactEmail": "sample string 13",
    "BodyUsedControlFlag": 14,
    "BodyNumberOfMembers": 15,
    "BodyUsedActingFlag": 16,
    "BodyUsedTargetFlag": 17,
    "BodyUsedSponsorFlag": 18
  },
  {
    "BodyId": 1,
    "BodyGuid": "sample string 2",
    "BodyLastModifiedUtc": "2024-12-11T17:45:07.9787688-05:00",
    "BodyRowVersion": "QEA=",
    "BodyName": "sample string 4",
    "BodyTypeId": 5,
    "BodyTypeName": "sample string 6",
    "BodyMeetFlag": 7,
    "BodyActiveFlag": 8,
    "BodySort": 9,
    "BodyDescription": "sample string 10",
    "BodyContactNameId": 1,
    "BodyContactFullName": "sample string 11",
    "BodyContactPhone": "sample string 12",
    "BodyContactEmail": "sample string 13",
    "BodyUsedControlFlag": 14,
    "BodyNumberOfMembers": 15,
    "BodyUsedActingFlag": 16,
    "BodyUsedTargetFlag": 17,
    "BodyUsedSponsorFlag": 18
  }
\]

**Sample:**

<ArrayOfGranicusBody xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusBody\>
    <BodyActiveFlag\>8</BodyActiveFlag\>
    <BodyContactEmail\>sample string 13</BodyContactEmail\>
    <BodyContactFullName\>sample string 11</BodyContactFullName\>
    <BodyContactNameId\>1</BodyContactNameId\>
    <BodyContactPhone\>sample string 12</BodyContactPhone\>
    <BodyDescription\>sample string 10</BodyDescription\>
    <BodyGuid\>sample string 2</BodyGuid\>
    <BodyId\>1</BodyId\>
    <BodyLastModifiedUtc\>2024-12-11T17:45:07.9787688-05:00</BodyLastModifiedUtc\>
    <BodyMeetFlag\>7</BodyMeetFlag\>
    <BodyName\>sample string 4</BodyName\>
    <BodyNumberOfMembers\>15</BodyNumberOfMembers\>
    <BodyRowVersion\>QEA=</BodyRowVersion\>
    <BodySort\>9</BodySort\>
    <BodyTypeId\>5</BodyTypeId\>
    <BodyTypeName\>sample string 6</BodyTypeName\>
    <BodyUsedActingFlag\>16</BodyUsedActingFlag\>
    <BodyUsedControlFlag\>14</BodyUsedControlFlag\>
    <BodyUsedSponsorFlag\>18</BodyUsedSponsorFlag\>
    <BodyUsedTargetFlag\>17</BodyUsedTargetFlag\>
  </GranicusBody\>
  <GranicusBody\>
    <BodyActiveFlag\>8</BodyActiveFlag\>
    <BodyContactEmail\>sample string 13</BodyContactEmail\>
    <BodyContactFullName\>sample string 11</BodyContactFullName\>
    <BodyContactNameId\>1</BodyContactNameId\>
    <BodyContactPhone\>sample string 12</BodyContactPhone\>
    <BodyDescription\>sample string 10</BodyDescription\>
    <BodyGuid\>sample string 2</BodyGuid\>
    <BodyId\>1</BodyId\>
    <BodyLastModifiedUtc\>2024-12-11T17:45:07.9787688-05:00</BodyLastModifiedUtc\>
    <BodyMeetFlag\>7</BodyMeetFlag\>
    <BodyName\>sample string 4</BodyName\>
    <BodyNumberOfMembers\>15</BodyNumberOfMembers\>
    <BodyRowVersion\>QEA=</BodyRowVersion\>
    <BodySort\>9</BodySort\>
    <BodyTypeId\>5</BodyTypeId\>
    <BodyTypeName\>sample string 6</BodyTypeName\>
    <BodyUsedActingFlag\>16</BodyUsedActingFlag\>
    <BodyUsedControlFlag\>14</BodyUsedControlFlag\>
    <BodyUsedSponsorFlag\>18</BodyUsedSponsorFlag\>
    <BodyUsedTargetFlag\>17</BodyUsedTargetFlag\>
  </GranicusBody\>
</ArrayOfGranicusBody\>

**Sample:**

(\[{"BodyId":1,"BodyGuid":"sample string 2","BodyLastModifiedUtc":"2024-12-11T17:45:07.9787688-05:00","BodyRowVersion":"QEA=","BodyName":"sample string 4","BodyTypeId":5,"BodyTypeName":"sample string 6","BodyMeetFlag":7,"BodyActiveFlag":8,"BodySort":9,"BodyDescription":"sample string 10","BodyContactNameId":1,"BodyContactFullName":"sample string 11","BodyContactPhone":"sample string 12","BodyContactEmail":"sample string 13","BodyUsedControlFlag":14,"BodyNumberOfMembers":15,"BodyUsedActingFlag":16,"BodyUsedTargetFlag":17,"BodyUsedSponsorFlag":18},{"BodyId":1,"BodyGuid":"sample string 2","BodyLastModifiedUtc":"2024-12-11T17:45:07.9787688-05:00","BodyRowVersion":"QEA=","BodyName":"sample string 4","BodyTypeId":5,"BodyTypeName":"sample string 6","BodyMeetFlag":7,"BodyActiveFlag":8,"BodySort":9,"BodyDescription":"sample string 10","BodyContactNameId":1,"BodyContactFullName":"sample string 11","BodyContactPhone":"sample string 12","BodyContactEmail":"sample string 13","BodyUsedControlFlag":14,"BodyNumberOfMembers":15,"BodyUsedActingFlag":16,"BodyUsedTargetFlag":17,"BodyUsedSponsorFlag":18}\]);

GET APIS:

Title: GET v1/{Client}/Bodies/{BodyId}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Bodies-BodyId

Markdown Content:
Gets one Body.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| BodyId | The BodyId of the Body.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

[GranicusBody](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusBody)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| BodyId |  | integer | None.
 |
| BodyGuid |  | string | None.

 |
| BodyLastModifiedUtc |  | date | None.

 |
| BodyRowVersion |  | Collection of byte | None.

 |
| BodyName |  | string | Required

String length: inclusive between 1 and 255

 |
| BodyTypeId |  | integer | Required

 |
| BodyTypeName |  | string | None.

 |
| BodyMeetFlag |  | integer | None.

 |
| BodyActiveFlag |  | integer | None.

 |
| BodySort |  | integer | None.

 |
| BodyDescription |  | string | None.

 |
| BodyContactNameId |  | integer | None.

 |
| BodyContactFullName |  | string | None.

 |
| BodyContactPhone |  | string | None.

 |
| BodyContactEmail |  | string | None.

 |
| BodyUsedControlFlag |  | integer | None.

 |
| BodyNumberOfMembers |  | integer | None.

 |
| BodyUsedActingFlag |  | integer | None.

 |
| BodyUsedTargetFlag |  | integer | None.

 |
| BodyUsedSponsorFlag |  | integer | None.

 |

### Response Formats

**Sample:**

{
  "BodyId": 1,
  "BodyGuid": "sample string 2",
  "BodyLastModifiedUtc": "2024-12-11T17:45:12.7342751-05:00",
  "BodyRowVersion": "QEA=",
  "BodyName": "sample string 4",
  "BodyTypeId": 5,
  "BodyTypeName": "sample string 6",
  "BodyMeetFlag": 7,
  "BodyActiveFlag": 8,
  "BodySort": 9,
  "BodyDescription": "sample string 10",
  "BodyContactNameId": 1,
  "BodyContactFullName": "sample string 11",
  "BodyContactPhone": "sample string 12",
  "BodyContactEmail": "sample string 13",
  "BodyUsedControlFlag": 14,
  "BodyNumberOfMembers": 15,
  "BodyUsedActingFlag": 16,
  "BodyUsedTargetFlag": 17,
  "BodyUsedSponsorFlag": 18
}

**Sample:**

<GranicusBody xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <BodyActiveFlag\>8</BodyActiveFlag\>
  <BodyContactEmail\>sample string 13</BodyContactEmail\>
  <BodyContactFullName\>sample string 11</BodyContactFullName\>
  <BodyContactNameId\>1</BodyContactNameId\>
  <BodyContactPhone\>sample string 12</BodyContactPhone\>
  <BodyDescription\>sample string 10</BodyDescription\>
  <BodyGuid\>sample string 2</BodyGuid\>
  <BodyId\>1</BodyId\>
  <BodyLastModifiedUtc\>2024-12-11T17:45:12.7342751-05:00</BodyLastModifiedUtc\>
  <BodyMeetFlag\>7</BodyMeetFlag\>
  <BodyName\>sample string 4</BodyName\>
  <BodyNumberOfMembers\>15</BodyNumberOfMembers\>
  <BodyRowVersion\>QEA=</BodyRowVersion\>
  <BodySort\>9</BodySort\>
  <BodyTypeId\>5</BodyTypeId\>
  <BodyTypeName\>sample string 6</BodyTypeName\>
  <BodyUsedActingFlag\>16</BodyUsedActingFlag\>
  <BodyUsedControlFlag\>14</BodyUsedControlFlag\>
  <BodyUsedSponsorFlag\>18</BodyUsedSponsorFlag\>
  <BodyUsedTargetFlag\>17</BodyUsedTargetFlag\>
</GranicusBody\>

**Sample:**

({"BodyId":1,"BodyGuid":"sample string 2","BodyLastModifiedUtc":"2024-12-11T17:45:12.7342751-05:00","BodyRowVersion":"QEA=","BodyName":"sample string 4","BodyTypeId":5,"BodyTypeName":"sample string 6","BodyMeetFlag":7,"BodyActiveFlag":8,"BodySort":9,"BodyDescription":"sample string 10","BodyContactNameId":1,"BodyContactFullName":"sample string 11","BodyContactPhone":"sample string 12","BodyContactEmail":"sample string 13","BodyUsedControlFlag":14,"BodyNumberOfMembers":15,"BodyUsedActingFlag":16,"BodyUsedTargetFlag":17,"BodyUsedSponsorFlag":18});

Title: GET v1/{Client}/VoteTypes/{VoteTypeId}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-VoteTypes-VoteTypeId

Markdown Content:
Gets one Vote Type.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| VoteTypeId | The Id of the Vote Type.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

[GranicusVoteType](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusVoteType)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| VoteTypeId |  | integer | None.
 |
| VoteTypeGuid |  | string | None.

 |
| VoteTypeLastModifiedUtc |  | date | None.

 |
| VoteTypeRowVersion |  | Collection of byte | None.

 |
| VoteTypeName |  | string | Required

 |
| VoteTypePluralName |  | string | Required

 |
| VoteTypeUsedFor |  | integer | None.

 |
| VoteTypeResult |  | integer | None.

 |
| VoteTypeSort |  | integer | None.

 |

### Response Formats

**Sample:**

{
  "VoteTypeId": 1,
  "VoteTypeGuid": "sample string 2",
  "VoteTypeLastModifiedUtc": "2024-12-11T18:04:17.1929624-05:00",
  "VoteTypeRowVersion": "QEA=",
  "VoteTypeName": "sample string 4",
  "VoteTypePluralName": "sample string 5",
  "VoteTypeUsedFor": 6,
  "VoteTypeResult": 7,
  "VoteTypeSort": 8
}

**Sample:**

<GranicusVoteType xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <VoteTypeGuid\>sample string 2</VoteTypeGuid\>
  <VoteTypeId\>1</VoteTypeId\>
  <VoteTypeLastModifiedUtc\>2024-12-11T18:04:17.1929624-05:00</VoteTypeLastModifiedUtc\>
  <VoteTypeName\>sample string 4</VoteTypeName\>
  <VoteTypePluralName\>sample string 5</VoteTypePluralName\>
  <VoteTypeResult\>7</VoteTypeResult\>
  <VoteTypeRowVersion\>QEA=</VoteTypeRowVersion\>
  <VoteTypeSort\>8</VoteTypeSort\>
  <VoteTypeUsedFor\>6</VoteTypeUsedFor\>
</GranicusVoteType\>

**Sample:**

({"VoteTypeId":1,"VoteTypeGuid":"sample string 2","VoteTypeLastModifiedUtc":"2024-12-11T18:04:17.1929624-05:00","VoteTypeRowVersion":"QEA=","VoteTypeName":"sample string 4","VoteTypePluralName":"sample string 5","VoteTypeUsedFor":6,"VoteTypeResult":7,"VoteTypeSort":8});

Title: GET v1/{Client}/VoteTypes

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-VoteTypes

Markdown Content:
Gets all Vote Types.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusVoteType](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusVoteType)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| VoteTypeId |  | integer | None.
 |
| VoteTypeGuid |  | string | None.

 |
| VoteTypeLastModifiedUtc |  | date | None.

 |
| VoteTypeRowVersion |  | Collection of byte | None.

 |
| VoteTypeName |  | string | Required

 |
| VoteTypePluralName |  | string | Required

 |
| VoteTypeUsedFor |  | integer | None.

 |
| VoteTypeResult |  | integer | None.

 |
| VoteTypeSort |  | integer | None.

 |

### Response Formats

**Sample:**

\[
  {
    "VoteTypeId": 1,
    "VoteTypeGuid": "sample string 2",
    "VoteTypeLastModifiedUtc": "2024-12-11T18:04:07.7040425-05:00",
    "VoteTypeRowVersion": "QEA=",
    "VoteTypeName": "sample string 4",
    "VoteTypePluralName": "sample string 5",
    "VoteTypeUsedFor": 6,
    "VoteTypeResult": 7,
    "VoteTypeSort": 8
  },
  {
    "VoteTypeId": 1,
    "VoteTypeGuid": "sample string 2",
    "VoteTypeLastModifiedUtc": "2024-12-11T18:04:07.7040425-05:00",
    "VoteTypeRowVersion": "QEA=",
    "VoteTypeName": "sample string 4",
    "VoteTypePluralName": "sample string 5",
    "VoteTypeUsedFor": 6,
    "VoteTypeResult": 7,
    "VoteTypeSort": 8
  }
\]

**Sample:**

<ArrayOfGranicusVoteType xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusVoteType\>
    <VoteTypeGuid\>sample string 2</VoteTypeGuid\>
    <VoteTypeId\>1</VoteTypeId\>
    <VoteTypeLastModifiedUtc\>2024-12-11T18:04:07.7040425-05:00</VoteTypeLastModifiedUtc\>
    <VoteTypeName\>sample string 4</VoteTypeName\>
    <VoteTypePluralName\>sample string 5</VoteTypePluralName\>
    <VoteTypeResult\>7</VoteTypeResult\>
    <VoteTypeRowVersion\>QEA=</VoteTypeRowVersion\>
    <VoteTypeSort\>8</VoteTypeSort\>
    <VoteTypeUsedFor\>6</VoteTypeUsedFor\>
  </GranicusVoteType\>
  <GranicusVoteType\>
    <VoteTypeGuid\>sample string 2</VoteTypeGuid\>
    <VoteTypeId\>1</VoteTypeId\>
    <VoteTypeLastModifiedUtc\>2024-12-11T18:04:07.7040425-05:00</VoteTypeLastModifiedUtc\>
    <VoteTypeName\>sample string 4</VoteTypeName\>
    <VoteTypePluralName\>sample string 5</VoteTypePluralName\>
    <VoteTypeResult\>7</VoteTypeResult\>
    <VoteTypeRowVersion\>QEA=</VoteTypeRowVersion\>
    <VoteTypeSort\>8</VoteTypeSort\>
    <VoteTypeUsedFor\>6</VoteTypeUsedFor\>
  </GranicusVoteType\>
</ArrayOfGranicusVoteType\>

**Sample:**

(\[{"VoteTypeId":1,"VoteTypeGuid":"sample string 2","VoteTypeLastModifiedUtc":"2024-12-11T18:04:07.7040425-05:00","VoteTypeRowVersion":"QEA=","VoteTypeName":"sample string 4","VoteTypePluralName":"sample string 5","VoteTypeUsedFor":6,"VoteTypeResult":7,"VoteTypeSort":8},{"VoteTypeId":1,"VoteTypeGuid":"sample string 2","VoteTypeLastModifiedUtc":"2024-12-11T18:04:07.7040425-05:00","VoteTypeRowVersion":"QEA=","VoteTypeName":"sample string 4","VoteTypePluralName":"sample string 5","VoteTypeUsedFor":6,"VoteTypeResult":7,"VoteTypeSort":8}\]);

Title: GET v1/{Client}/Persons/{PersonId}/Votes

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Persons-PersonId-Votes

Markdown Content:
Gets all Vote records for a Person.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| PersonId | The Id of the person record.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusVote](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusVote)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| VoteId |  | integer | None.
 |
| VoteGuid |  | string | None.

 |
| VoteLastModifiedUtc |  | date | None.

 |
| VoteRowVersion |  | Collection of byte | None.

 |
| VotePersonId |  | integer | Required

 |
| VotePersonName |  | string | None.

 |
| VoteValueId |  | integer | Required

 |
| VoteValueName |  | string | None.

 |
| VoteSort |  | integer | None.

 |
| VoteResult |  | integer | None.

 |
| VoteEventItemId |  | integer | None.

 |

### Response Formats

**Sample:**

\[
  {
    "VoteId": 1,
    "VoteGuid": "sample string 2",
    "VoteLastModifiedUtc": "2024-12-11T18:04:00.7157826-05:00",
    "VoteRowVersion": "QEA=",
    "VotePersonId": 4,
    "VotePersonName": "sample string 5",
    "VoteValueId": 1,
    "VoteValueName": "sample string 6",
    "VoteSort": 7,
    "VoteResult": 1,
    "VoteEventItemId": 8
  },
  {
    "VoteId": 1,
    "VoteGuid": "sample string 2",
    "VoteLastModifiedUtc": "2024-12-11T18:04:00.7157826-05:00",
    "VoteRowVersion": "QEA=",
    "VotePersonId": 4,
    "VotePersonName": "sample string 5",
    "VoteValueId": 1,
    "VoteValueName": "sample string 6",
    "VoteSort": 7,
    "VoteResult": 1,
    "VoteEventItemId": 8
  }
\]

**Sample:**

<ArrayOfGranicusVote xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusVote\>
    <VoteEventItemId\>8</VoteEventItemId\>
    <VoteGuid\>sample string 2</VoteGuid\>
    <VoteId\>1</VoteId\>
    <VoteLastModifiedUtc\>2024-12-11T18:04:00.7157826-05:00</VoteLastModifiedUtc\>
    <VotePersonId\>4</VotePersonId\>
    <VotePersonName\>sample string 5</VotePersonName\>
    <VoteResult\>1</VoteResult\>
    <VoteRowVersion\>QEA=</VoteRowVersion\>
    <VoteSort\>7</VoteSort\>
    <VoteValueId\>1</VoteValueId\>
    <VoteValueName\>sample string 6</VoteValueName\>
  </GranicusVote\>
  <GranicusVote\>
    <VoteEventItemId\>8</VoteEventItemId\>
    <VoteGuid\>sample string 2</VoteGuid\>
    <VoteId\>1</VoteId\>
    <VoteLastModifiedUtc\>2024-12-11T18:04:00.7157826-05:00</VoteLastModifiedUtc\>
    <VotePersonId\>4</VotePersonId\>
    <VotePersonName\>sample string 5</VotePersonName\>
    <VoteResult\>1</VoteResult\>
    <VoteRowVersion\>QEA=</VoteRowVersion\>
    <VoteSort\>7</VoteSort\>
    <VoteValueId\>1</VoteValueId\>
    <VoteValueName\>sample string 6</VoteValueName\>
  </GranicusVote\>
</ArrayOfGranicusVote\>

**Sample:**

(\[{"VoteId":1,"VoteGuid":"sample string 2","VoteLastModifiedUtc":"2024-12-11T18:04:00.7157826-05:00","VoteRowVersion":"QEA=","VotePersonId":4,"VotePersonName":"sample string 5","VoteValueId":1,"VoteValueName":"sample string 6","VoteSort":7,"VoteResult":1,"VoteEventItemId":8},{"VoteId":1,"VoteGuid":"sample string 2","VoteLastModifiedUtc":"2024-12-11T18:04:00.7157826-05:00","VoteRowVersion":"QEA=","VotePersonId":4,"VotePersonName":"sample string 5","VoteValueId":1,"VoteValueName":"sample string 6","VoteSort":7,"VoteResult":1,"VoteEventItemId":8}\]);
Title: GET v1/{Client}/EventItems/{EventItemId}/Votes/{VoteId}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-EventItems-EventItemId-Votes-VoteId

Markdown Content:
Gets one Vote Item.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| EventItemId | The Id of the Event Item.

 | integer | Required

 |
| VoteId | The Id of the Vote Item.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

[GranicusVote](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusVote)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| VoteId |  | integer | None.
 |
| VoteGuid |  | string | None.

 |
| VoteLastModifiedUtc |  | date | None.

 |
| VoteRowVersion |  | Collection of byte | None.

 |
| VotePersonId |  | integer | Required

 |
| VotePersonName |  | string | None.

 |
| VoteValueId |  | integer | Required

 |
| VoteValueName |  | string | None.

 |
| VoteSort |  | integer | None.

 |
| VoteResult |  | integer | None.

 |
| VoteEventItemId |  | integer | None.

 |

### Response Formats

**Sample:**

{
  "VoteId": 1,
  "VoteGuid": "sample string 2",
  "VoteLastModifiedUtc": "2024-12-11T18:03:46.572197-05:00",
  "VoteRowVersion": "QEA=",
  "VotePersonId": 4,
  "VotePersonName": "sample string 5",
  "VoteValueId": 1,
  "VoteValueName": "sample string 6",
  "VoteSort": 7,
  "VoteResult": 1,
  "VoteEventItemId": 8
}

**Sample:**

<GranicusVote xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <VoteEventItemId\>8</VoteEventItemId\>
  <VoteGuid\>sample string 2</VoteGuid\>
  <VoteId\>1</VoteId\>
  <VoteLastModifiedUtc\>2024-12-11T18:03:46.572197-05:00</VoteLastModifiedUtc\>
  <VotePersonId\>4</VotePersonId\>
  <VotePersonName\>sample string 5</VotePersonName\>
  <VoteResult\>1</VoteResult\>
  <VoteRowVersion\>QEA=</VoteRowVersion\>
  <VoteSort\>7</VoteSort\>
  <VoteValueId\>1</VoteValueId\>
  <VoteValueName\>sample string 6</VoteValueName\>
</GranicusVote\>

**Sample:**

({"VoteId":1,"VoteGuid":"sample string 2","VoteLastModifiedUtc":"2024-12-11T18:03:46.572197-05:00","VoteRowVersion":"QEA=","VotePersonId":4,"VotePersonName":"sample string 5","VoteValueId":1,"VoteValueName":"sample string 6","VoteSort":7,"VoteResult":1,"VoteEventItemId":8});
Title: GET v1/{Client}/EventItems/{EventItemId}/Votes

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-EventItems-EventItemId-Votes

Markdown Content:
Gets all Vote Items under a particular Event Item.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| EventItemId | The Id of the Event Item.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusVote](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusVote)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| VoteId |  | integer | None.
 |
| VoteGuid |  | string | None.

 |
| VoteLastModifiedUtc |  | date | None.

 |
| VoteRowVersion |  | Collection of byte | None.

 |
| VotePersonId |  | integer | Required

 |
| VotePersonName |  | string | None.

 |
| VoteValueId |  | integer | Required

 |
| VoteValueName |  | string | None.

 |
| VoteSort |  | integer | None.

 |
| VoteResult |  | integer | None.

 |
| VoteEventItemId |  | integer | None.

 |

### Response Formats

**Sample:**

\[
  {
    "VoteId": 1,
    "VoteGuid": "sample string 2",
    "VoteLastModifiedUtc": "2024-12-11T18:03:37.5212491-05:00",
    "VoteRowVersion": "QEA=",
    "VotePersonId": 4,
    "VotePersonName": "sample string 5",
    "VoteValueId": 1,
    "VoteValueName": "sample string 6",
    "VoteSort": 7,
    "VoteResult": 1,
    "VoteEventItemId": 8
  },
  {
    "VoteId": 1,
    "VoteGuid": "sample string 2",
    "VoteLastModifiedUtc": "2024-12-11T18:03:37.5212491-05:00",
    "VoteRowVersion": "QEA=",
    "VotePersonId": 4,
    "VotePersonName": "sample string 5",
    "VoteValueId": 1,
    "VoteValueName": "sample string 6",
    "VoteSort": 7,
    "VoteResult": 1,
    "VoteEventItemId": 8
  }
\]

**Sample:**

<ArrayOfGranicusVote xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusVote\>
    <VoteEventItemId\>8</VoteEventItemId\>
    <VoteGuid\>sample string 2</VoteGuid\>
    <VoteId\>1</VoteId\>
    <VoteLastModifiedUtc\>2024-12-11T18:03:37.5212491-05:00</VoteLastModifiedUtc\>
    <VotePersonId\>4</VotePersonId\>
    <VotePersonName\>sample string 5</VotePersonName\>
    <VoteResult\>1</VoteResult\>
    <VoteRowVersion\>QEA=</VoteRowVersion\>
    <VoteSort\>7</VoteSort\>
    <VoteValueId\>1</VoteValueId\>
    <VoteValueName\>sample string 6</VoteValueName\>
  </GranicusVote\>
  <GranicusVote\>
    <VoteEventItemId\>8</VoteEventItemId\>
    <VoteGuid\>sample string 2</VoteGuid\>
    <VoteId\>1</VoteId\>
    <VoteLastModifiedUtc\>2024-12-11T18:03:37.5212491-05:00</VoteLastModifiedUtc\>
    <VotePersonId\>4</VotePersonId\>
    <VotePersonName\>sample string 5</VotePersonName\>
    <VoteResult\>1</VoteResult\>
    <VoteRowVersion\>QEA=</VoteRowVersion\>
    <VoteSort\>7</VoteSort\>
    <VoteValueId\>1</VoteValueId\>
    <VoteValueName\>sample string 6</VoteValueName\>
  </GranicusVote\>
</ArrayOfGranicusVote\>

**Sample:**

(\[{"VoteId":1,"VoteGuid":"sample string 2","VoteLastModifiedUtc":"2024-12-11T18:03:37.5212491-05:00","VoteRowVersion":"QEA=","VotePersonId":4,"VotePersonName":"sample string 5","VoteValueId":1,"VoteValueName":"sample string 6","VoteSort":7,"VoteResult":1,"VoteEventItemId":8},{"VoteId":1,"VoteGuid":"sample string 2","VoteLastModifiedUtc":"2024-12-11T18:03:37.5212491-05:00","VoteRowVersion":"QEA=","VotePersonId":4,"VotePersonName":"sample string 5","VoteValueId":1,"VoteValueName":"sample string 6","VoteSort":7,"VoteResult":1,"VoteEventItemId":8}\]);
Title: GET v1/{Client}/Persons/{PersonId}/RollCalls

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Persons-PersonId-RollCalls

Markdown Content:
Gets all Roll Call records for a Person.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| PersonId | The Id of the person record.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusRollCall](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusRollCall)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| RollCallId |  | integer | None.
 |
| RollCallGuid |  | string | None.

 |
| RollCallLastModifiedUtc |  | date | None.

 |
| RollCallRowVersion |  | Collection of byte | None.

 |
| RollCallPersonId |  | integer | Required

 |
| RollCallPersonName |  | string | None.

 |
| RollCallValueId |  | integer | Required

 |
| RollCallValueName |  | string | None.

 |
| RollCallSort |  | integer | None.

 |
| RollCallResult |  | integer | None.

 |
| RollCallEventItemId |  | integer | None.

 |

### Response Formats

**Sample:**

\[
  {
    "RollCallId": 1,
    "RollCallGuid": "sample string 2",
    "RollCallLastModifiedUtc": "2024-12-11T18:03:30.6360391-05:00",
    "RollCallRowVersion": "QEA=",
    "RollCallPersonId": 4,
    "RollCallPersonName": "sample string 5",
    "RollCallValueId": 1,
    "RollCallValueName": "sample string 6",
    "RollCallSort": 7,
    "RollCallResult": 1,
    "RollCallEventItemId": 8
  },
  {
    "RollCallId": 1,
    "RollCallGuid": "sample string 2",
    "RollCallLastModifiedUtc": "2024-12-11T18:03:30.6360391-05:00",
    "RollCallRowVersion": "QEA=",
    "RollCallPersonId": 4,
    "RollCallPersonName": "sample string 5",
    "RollCallValueId": 1,
    "RollCallValueName": "sample string 6",
    "RollCallSort": 7,
    "RollCallResult": 1,
    "RollCallEventItemId": 8
  }
\]

**Sample:**

<ArrayOfGranicusRollCall xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusRollCall\>
    <RollCallEventItemId\>8</RollCallEventItemId\>
    <RollCallGuid\>sample string 2</RollCallGuid\>
    <RollCallId\>1</RollCallId\>
    <RollCallLastModifiedUtc\>2024-12-11T18:03:30.6360391-05:00</RollCallLastModifiedUtc\>
    <RollCallPersonId\>4</RollCallPersonId\>
    <RollCallPersonName\>sample string 5</RollCallPersonName\>
    <RollCallResult\>1</RollCallResult\>
    <RollCallRowVersion\>QEA=</RollCallRowVersion\>
    <RollCallSort\>7</RollCallSort\>
    <RollCallValueId\>1</RollCallValueId\>
    <RollCallValueName\>sample string 6</RollCallValueName\>
  </GranicusRollCall\>
  <GranicusRollCall\>
    <RollCallEventItemId\>8</RollCallEventItemId\>
    <RollCallGuid\>sample string 2</RollCallGuid\>
    <RollCallId\>1</RollCallId\>
    <RollCallLastModifiedUtc\>2024-12-11T18:03:30.6360391-05:00</RollCallLastModifiedUtc\>
    <RollCallPersonId\>4</RollCallPersonId\>
    <RollCallPersonName\>sample string 5</RollCallPersonName\>
    <RollCallResult\>1</RollCallResult\>
    <RollCallRowVersion\>QEA=</RollCallRowVersion\>
    <RollCallSort\>7</RollCallSort\>
    <RollCallValueId\>1</RollCallValueId\>
    <RollCallValueName\>sample string 6</RollCallValueName\>
  </GranicusRollCall\>
</ArrayOfGranicusRollCall\>

**Sample:**

(\[{"RollCallId":1,"RollCallGuid":"sample string 2","RollCallLastModifiedUtc":"2024-12-11T18:03:30.6360391-05:00","RollCallRowVersion":"QEA=","RollCallPersonId":4,"RollCallPersonName":"sample string 5","RollCallValueId":1,"RollCallValueName":"sample string 6","RollCallSort":7,"RollCallResult":1,"RollCallEventItemId":8},{"RollCallId":1,"RollCallGuid":"sample string 2","RollCallLastModifiedUtc":"2024-12-11T18:03:30.6360391-05:00","RollCallRowVersion":"QEA=","RollCallPersonId":4,"RollCallPersonName":"sample string 5","RollCallValueId":1,"RollCallValueName":"sample string 6","RollCallSort":7,"RollCallResult":1,"RollCallEventItemId":8}\]);

Title: GET v1/{Client}/EventItems/{EventItemId}/RollCalls/{RollCallId}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-EventItems-EventItemId-RollCalls-RollCallId

Markdown Content:
Gets one Roll Call Item.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| EventItemId | The Id of the Event Item.

 | integer | Required

 |
| RollCallId | The Id of the Roll Call Item.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

[GranicusRollCall](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusRollCall)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| RollCallId |  | integer | None.
 |
| RollCallGuid |  | string | None.

 |
| RollCallLastModifiedUtc |  | date | None.

 |
| RollCallRowVersion |  | Collection of byte | None.

 |
| RollCallPersonId |  | integer | Required

 |
| RollCallPersonName |  | string | None.

 |
| RollCallValueId |  | integer | Required

 |
| RollCallValueName |  | string | None.

 |
| RollCallSort |  | integer | None.

 |
| RollCallResult |  | integer | None.

 |
| RollCallEventItemId |  | integer | None.

 |

### Response Formats

**Sample:**

{
  "RollCallId": 1,
  "RollCallGuid": "sample string 2",
  "RollCallLastModifiedUtc": "2024-12-11T18:03:14.1008182-05:00",
  "RollCallRowVersion": "QEA=",
  "RollCallPersonId": 4,
  "RollCallPersonName": "sample string 5",
  "RollCallValueId": 1,
  "RollCallValueName": "sample string 6",
  "RollCallSort": 7,
  "RollCallResult": 1,
  "RollCallEventItemId": 8
}

**Sample:**

<GranicusRollCall xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <RollCallEventItemId\>8</RollCallEventItemId\>
  <RollCallGuid\>sample string 2</RollCallGuid\>
  <RollCallId\>1</RollCallId\>
  <RollCallLastModifiedUtc\>2024-12-11T18:03:14.1008182-05:00</RollCallLastModifiedUtc\>
  <RollCallPersonId\>4</RollCallPersonId\>
  <RollCallPersonName\>sample string 5</RollCallPersonName\>
  <RollCallResult\>1</RollCallResult\>
  <RollCallRowVersion\>QEA=</RollCallRowVersion\>
  <RollCallSort\>7</RollCallSort\>
  <RollCallValueId\>1</RollCallValueId\>
  <RollCallValueName\>sample string 6</RollCallValueName\>
</GranicusRollCall\>

**Sample:**

({"RollCallId":1,"RollCallGuid":"sample string 2","RollCallLastModifiedUtc":"2024-12-11T18:03:14.1008182-05:00","RollCallRowVersion":"QEA=","RollCallPersonId":4,"RollCallPersonName":"sample string 5","RollCallValueId":1,"RollCallValueName":"sample string 6","RollCallSort":7,"RollCallResult":1,"RollCallEventItemId":8});

Title: GET v1/{Client}/EventItems/{EventItemId}/RollCalls

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-EventItems-EventItemId-RollCalls

Markdown Content:
Gets all Roll Call Items under a particular Event Item.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| EventItemId | The Id of the Event Item.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusRollCall](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusRollCall)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| RollCallId |  | integer | None.
 |
| RollCallGuid |  | string | None.

 |
| RollCallLastModifiedUtc |  | date | None.

 |
| RollCallRowVersion |  | Collection of byte | None.

 |
| RollCallPersonId |  | integer | Required

 |
| RollCallPersonName |  | string | None.

 |
| RollCallValueId |  | integer | Required

 |
| RollCallValueName |  | string | None.

 |
| RollCallSort |  | integer | None.

 |
| RollCallResult |  | integer | None.

 |
| RollCallEventItemId |  | integer | None.

 |

### Response Formats

**Sample:**

\[
  {
    "RollCallId": 1,
    "RollCallGuid": "sample string 2",
    "RollCallLastModifiedUtc": "2024-12-11T18:03:10.2189624-05:00",
    "RollCallRowVersion": "QEA=",
    "RollCallPersonId": 4,
    "RollCallPersonName": "sample string 5",
    "RollCallValueId": 1,
    "RollCallValueName": "sample string 6",
    "RollCallSort": 7,
    "RollCallResult": 1,
    "RollCallEventItemId": 8
  },
  {
    "RollCallId": 1,
    "RollCallGuid": "sample string 2",
    "RollCallLastModifiedUtc": "2024-12-11T18:03:10.2189624-05:00",
    "RollCallRowVersion": "QEA=",
    "RollCallPersonId": 4,
    "RollCallPersonName": "sample string 5",
    "RollCallValueId": 1,
    "RollCallValueName": "sample string 6",
    "RollCallSort": 7,
    "RollCallResult": 1,
    "RollCallEventItemId": 8
  }
\]

**Sample:**

<ArrayOfGranicusRollCall xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusRollCall\>
    <RollCallEventItemId\>8</RollCallEventItemId\>
    <RollCallGuid\>sample string 2</RollCallGuid\>
    <RollCallId\>1</RollCallId\>
    <RollCallLastModifiedUtc\>2024-12-11T18:03:10.2189624-05:00</RollCallLastModifiedUtc\>
    <RollCallPersonId\>4</RollCallPersonId\>
    <RollCallPersonName\>sample string 5</RollCallPersonName\>
    <RollCallResult\>1</RollCallResult\>
    <RollCallRowVersion\>QEA=</RollCallRowVersion\>
    <RollCallSort\>7</RollCallSort\>
    <RollCallValueId\>1</RollCallValueId\>
    <RollCallValueName\>sample string 6</RollCallValueName\>
  </GranicusRollCall\>
  <GranicusRollCall\>
    <RollCallEventItemId\>8</RollCallEventItemId\>
    <RollCallGuid\>sample string 2</RollCallGuid\>
    <RollCallId\>1</RollCallId\>
    <RollCallLastModifiedUtc\>2024-12-11T18:03:10.2189624-05:00</RollCallLastModifiedUtc\>
    <RollCallPersonId\>4</RollCallPersonId\>
    <RollCallPersonName\>sample string 5</RollCallPersonName\>
    <RollCallResult\>1</RollCallResult\>
    <RollCallRowVersion\>QEA=</RollCallRowVersion\>
    <RollCallSort\>7</RollCallSort\>
    <RollCallValueId\>1</RollCallValueId\>
    <RollCallValueName\>sample string 6</RollCallValueName\>
  </GranicusRollCall\>
</ArrayOfGranicusRollCall\>

**Sample:**

(\[{"RollCallId":1,"RollCallGuid":"sample string 2","RollCallLastModifiedUtc":"2024-12-11T18:03:10.2189624-05:00","RollCallRowVersion":"QEA=","RollCallPersonId":4,"RollCallPersonName":"sample string 5","RollCallValueId":1,"RollCallValueName":"sample string 6","RollCallSort":7,"RollCallResult":1,"RollCallEventItemId":8},{"RollCallId":1,"RollCallGuid":"sample string 2","RollCallLastModifiedUtc":"2024-12-11T18:03:10.2189624-05:00","RollCallRowVersion":"QEA=","RollCallPersonId":4,"RollCallPersonName":"sample string 5","RollCallValueId":1,"RollCallValueName":"sample string 6","RollCallSort":7,"RollCallResult":1,"RollCallEventItemId":8}\]);
Title: GET v1/{Client}/Persons/{PersonId}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Persons-PersonId

Markdown Content:
Gets one Person.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| PersonId | The Id of the Person.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

[GranicusPerson](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusPerson)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| PersonId |  | integer | None.
 |
| PersonGuid |  | string | None.

 |
| PersonLastModifiedUtc |  | date | None.

 |
| PersonRowVersion |  | Collection of byte | None.

 |
| PersonFirstName |  | string | None.

 |
| PersonLastName |  | string | Required

 |
| PersonFullName |  | string | Required

 |
| PersonActiveFlag |  | integer | None.

 |
| PersonCanViewFlag |  | integer | None.

 |
| PersonUsedSponsorFlag |  | integer | None.

 |
| PersonAddress1 |  | string | None.

 |
| PersonCity1 |  | string | None.

 |
| PersonState1 |  | string | None.

 |
| PersonZip1 |  | string | None.

 |
| PersonPhone |  | string | None.

 |
| PersonFax |  | string | None.

 |
| PersonEmail |  | string | None.

 |
| PersonWWW |  | string | None.

 |
| PersonAddress2 |  | string | None.

 |
| PersonCity2 |  | string | None.

 |
| PersonState2 |  | string | None.

 |
| PersonZip2 |  | string | None.

 |
| PersonPhone2 |  | string | None.

 |
| PersonFax2 |  | string | None.

 |
| PersonEmail2 |  | string | None.

 |
| PersonWWW2 |  | string | None.

 |

### Response Formats

**Sample:**

{
  "PersonId": 1,
  "PersonGuid": "sample string 2",
  "PersonLastModifiedUtc": "2024-12-11T18:02:59.4489947-05:00",
  "PersonRowVersion": "QEA=",
  "PersonFirstName": "sample string 4",
  "PersonLastName": "sample string 5",
  "PersonFullName": "sample string 6",
  "PersonActiveFlag": 7,
  "PersonCanViewFlag": 1,
  "PersonUsedSponsorFlag": 8,
  "PersonAddress1": "sample string 9",
  "PersonCity1": "sample string 10",
  "PersonState1": "sample string 11",
  "PersonZip1": "sample string 12",
  "PersonPhone": "sample string 13",
  "PersonFax": "sample string 14",
  "PersonEmail": "sample string 15",
  "PersonWWW": "sample string 16",
  "PersonAddress2": "sample string 17",
  "PersonCity2": "sample string 18",
  "PersonState2": "sample string 19",
  "PersonZip2": "sample string 20",
  "PersonPhone2": "sample string 21",
  "PersonFax2": "sample string 22",
  "PersonEmail2": "sample string 23",
  "PersonWWW2": "sample string 24"
}

**Sample:**

<GranicusPerson xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <PersonActiveFlag\>7</PersonActiveFlag\>
  <PersonAddress1\>sample string 9</PersonAddress1\>
  <PersonAddress2\>sample string 17</PersonAddress2\>
  <PersonCanViewFlag\>1</PersonCanViewFlag\>
  <PersonCity1\>sample string 10</PersonCity1\>
  <PersonCity2\>sample string 18</PersonCity2\>
  <PersonEmail\>sample string 15</PersonEmail\>
  <PersonEmail2\>sample string 23</PersonEmail2\>
  <PersonFax\>sample string 14</PersonFax\>
  <PersonFax2\>sample string 22</PersonFax2\>
  <PersonFirstName\>sample string 4</PersonFirstName\>
  <PersonFullName\>sample string 6</PersonFullName\>
  <PersonGuid\>sample string 2</PersonGuid\>
  <PersonId\>1</PersonId\>
  <PersonLastModifiedUtc\>2024-12-11T18:02:59.4489947-05:00</PersonLastModifiedUtc\>
  <PersonLastName\>sample string 5</PersonLastName\>
  <PersonPhone\>sample string 13</PersonPhone\>
  <PersonPhone2\>sample string 21</PersonPhone2\>
  <PersonRowVersion\>QEA=</PersonRowVersion\>
  <PersonState1\>sample string 11</PersonState1\>
  <PersonState2\>sample string 19</PersonState2\>
  <PersonUsedSponsorFlag\>8</PersonUsedSponsorFlag\>
  <PersonWWW\>sample string 16</PersonWWW\>
  <PersonWWW2\>sample string 24</PersonWWW2\>
  <PersonZip1\>sample string 12</PersonZip1\>
  <PersonZip2\>sample string 20</PersonZip2\>
</GranicusPerson\>

**Sample:**

({"PersonId":1,"PersonGuid":"sample string 2","PersonLastModifiedUtc":"2024-12-11T18:02:59.4489947-05:00","PersonRowVersion":"QEA=","PersonFirstName":"sample string 4","PersonLastName":"sample string 5","PersonFullName":"sample string 6","PersonActiveFlag":7,"PersonCanViewFlag":1,"PersonUsedSponsorFlag":8,"PersonAddress1":"sample string 9","PersonCity1":"sample string 10","PersonState1":"sample string 11","PersonZip1":"sample string 12","PersonPhone":"sample string 13","PersonFax":"sample string 14","PersonEmail":"sample string 15","PersonWWW":"sample string 16","PersonAddress2":"sample string 17","PersonCity2":"sample string 18","PersonState2":"sample string 19","PersonZip2":"sample string 20","PersonPhone2":"sample string 21","PersonFax2":"sample string 22","PersonEmail2":"sample string 23","PersonWWW2":"sample string 24"});
Title: GET v1/{Client}/Persons

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Persons

Markdown Content:
Gets all Persons.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusPerson](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusPerson)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| PersonId |  | integer | None.
 |
| PersonGuid |  | string | None.

 |
| PersonLastModifiedUtc |  | date | None.

 |
| PersonRowVersion |  | Collection of byte | None.

 |
| PersonFirstName |  | string | None.

 |
| PersonLastName |  | string | Required

 |
| PersonFullName |  | string | Required

 |
| PersonActiveFlag |  | integer | None.

 |
| PersonCanViewFlag |  | integer | None.

 |
| PersonUsedSponsorFlag |  | integer | None.

 |
| PersonAddress1 |  | string | None.

 |
| PersonCity1 |  | string | None.

 |
| PersonState1 |  | string | None.

 |
| PersonZip1 |  | string | None.

 |
| PersonPhone |  | string | None.

 |
| PersonFax |  | string | None.

 |
| PersonEmail |  | string | None.

 |
| PersonWWW |  | string | None.

 |
| PersonAddress2 |  | string | None.

 |
| PersonCity2 |  | string | None.

 |
| PersonState2 |  | string | None.

 |
| PersonZip2 |  | string | None.

 |
| PersonPhone2 |  | string | None.

 |
| PersonFax2 |  | string | None.

 |
| PersonEmail2 |  | string | None.

 |
| PersonWWW2 |  | string | None.

 |

### Response Formats

**Sample:**

\[
  {
    "PersonId": 1,
    "PersonGuid": "sample string 2",
    "PersonLastModifiedUtc": "2024-12-11T18:02:41.6028967-05:00",
    "PersonRowVersion": "QEA=",
    "PersonFirstName": "sample string 4",
    "PersonLastName": "sample string 5",
    "PersonFullName": "sample string 6",
    "PersonActiveFlag": 7,
    "PersonCanViewFlag": 1,
    "PersonUsedSponsorFlag": 8,
    "PersonAddress1": "sample string 9",
    "PersonCity1": "sample string 10",
    "PersonState1": "sample string 11",
    "PersonZip1": "sample string 12",
    "PersonPhone": "sample string 13",
    "PersonFax": "sample string 14",
    "PersonEmail": "sample string 15",
    "PersonWWW": "sample string 16",
    "PersonAddress2": "sample string 17",
    "PersonCity2": "sample string 18",
    "PersonState2": "sample string 19",
    "PersonZip2": "sample string 20",
    "PersonPhone2": "sample string 21",
    "PersonFax2": "sample string 22",
    "PersonEmail2": "sample string 23",
    "PersonWWW2": "sample string 24"
  },
  {
    "PersonId": 1,
    "PersonGuid": "sample string 2",
    "PersonLastModifiedUtc": "2024-12-11T18:02:41.6028967-05:00",
    "PersonRowVersion": "QEA=",
    "PersonFirstName": "sample string 4",
    "PersonLastName": "sample string 5",
    "PersonFullName": "sample string 6",
    "PersonActiveFlag": 7,
    "PersonCanViewFlag": 1,
    "PersonUsedSponsorFlag": 8,
    "PersonAddress1": "sample string 9",
    "PersonCity1": "sample string 10",
    "PersonState1": "sample string 11",
    "PersonZip1": "sample string 12",
    "PersonPhone": "sample string 13",
    "PersonFax": "sample string 14",
    "PersonEmail": "sample string 15",
    "PersonWWW": "sample string 16",
    "PersonAddress2": "sample string 17",
    "PersonCity2": "sample string 18",
    "PersonState2": "sample string 19",
    "PersonZip2": "sample string 20",
    "PersonPhone2": "sample string 21",
    "PersonFax2": "sample string 22",
    "PersonEmail2": "sample string 23",
    "PersonWWW2": "sample string 24"
  }
\]

**Sample:**

<ArrayOfGranicusPerson xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusPerson\>
    <PersonActiveFlag\>7</PersonActiveFlag\>
    <PersonAddress1\>sample string 9</PersonAddress1\>
    <PersonAddress2\>sample string 17</PersonAddress2\>
    <PersonCanViewFlag\>1</PersonCanViewFlag\>
    <PersonCity1\>sample string 10</PersonCity1\>
    <PersonCity2\>sample string 18</PersonCity2\>
    <PersonEmail\>sample string 15</PersonEmail\>
    <PersonEmail2\>sample string 23</PersonEmail2\>
    <PersonFax\>sample string 14</PersonFax\>
    <PersonFax2\>sample string 22</PersonFax2\>
    <PersonFirstName\>sample string 4</PersonFirstName\>
    <PersonFullName\>sample string 6</PersonFullName\>
    <PersonGuid\>sample string 2</PersonGuid\>
    <PersonId\>1</PersonId\>
    <PersonLastModifiedUtc\>2024-12-11T18:02:41.6028967-05:00</PersonLastModifiedUtc\>
    <PersonLastName\>sample string 5</PersonLastName\>
    <PersonPhone\>sample string 13</PersonPhone\>
    <PersonPhone2\>sample string 21</PersonPhone2\>
    <PersonRowVersion\>QEA=</PersonRowVersion\>
    <PersonState1\>sample string 11</PersonState1\>
    <PersonState2\>sample string 19</PersonState2\>
    <PersonUsedSponsorFlag\>8</PersonUsedSponsorFlag\>
    <PersonWWW\>sample string 16</PersonWWW\>
    <PersonWWW2\>sample string 24</PersonWWW2\>
    <PersonZip1\>sample string 12</PersonZip1\>
    <PersonZip2\>sample string 20</PersonZip2\>
  </GranicusPerson\>
  <GranicusPerson\>
    <PersonActiveFlag\>7</PersonActiveFlag\>
    <PersonAddress1\>sample string 9</PersonAddress1\>
    <PersonAddress2\>sample string 17</PersonAddress2\>
    <PersonCanViewFlag\>1</PersonCanViewFlag\>
    <PersonCity1\>sample string 10</PersonCity1\>
    <PersonCity2\>sample string 18</PersonCity2\>
    <PersonEmail\>sample string 15</PersonEmail\>
    <PersonEmail2\>sample string 23</PersonEmail2\>
    <PersonFax\>sample string 14</PersonFax\>
    <PersonFax2\>sample string 22</PersonFax2\>
    <PersonFirstName\>sample string 4</PersonFirstName\>
    <PersonFullName\>sample string 6</PersonFullName\>
    <PersonGuid\>sample string 2</PersonGuid\>
    <PersonId\>1</PersonId\>
    <PersonLastModifiedUtc\>2024-12-11T18:02:41.6028967-05:00</PersonLastModifiedUtc\>
    <PersonLastName\>sample string 5</PersonLastName\>
    <PersonPhone\>sample string 13</PersonPhone\>
    <PersonPhone2\>sample string 21</PersonPhone2\>
    <PersonRowVersion\>QEA=</PersonRowVersion\>
    <PersonState1\>sample string 11</PersonState1\>
    <PersonState2\>sample string 19</PersonState2\>
    <PersonUsedSponsorFlag\>8</PersonUsedSponsorFlag\>
    <PersonWWW\>sample string 16</PersonWWW\>
    <PersonWWW2\>sample string 24</PersonWWW2\>
    <PersonZip1\>sample string 12</PersonZip1\>
    <PersonZip2\>sample string 20</PersonZip2\>
  </GranicusPerson\>
</ArrayOfGranicusPerson\>

**Sample:**

(\[{"PersonId":1,"PersonGuid":"sample string 2","PersonLastModifiedUtc":"2024-12-11T18:02:41.6028967-05:00","PersonRowVersion":"QEA=","PersonFirstName":"sample string 4","PersonLastName":"sample string 5","PersonFullName":"sample string 6","PersonActiveFlag":7,"PersonCanViewFlag":1,"PersonUsedSponsorFlag":8,"PersonAddress1":"sample string 9","PersonCity1":"sample string 10","PersonState1":"sample string 11","PersonZip1":"sample string 12","PersonPhone":"sample string 13","PersonFax":"sample string 14","PersonEmail":"sample string 15","PersonWWW":"sample string 16","PersonAddress2":"sample string 17","PersonCity2":"sample string 18","PersonState2":"sample string 19","PersonZip2":"sample string 20","PersonPhone2":"sample string 21","PersonFax2":"sample string 22","PersonEmail2":"sample string 23","PersonWWW2":"sample string 24"},{"PersonId":1,"PersonGuid":"sample string 2","PersonLastModifiedUtc":"2024-12-11T18:02:41.6028967-05:00","PersonRowVersion":"QEA=","PersonFirstName":"sample string 4","PersonLastName":"sample string 5","PersonFullName":"sample string 6","PersonActiveFlag":7,"PersonCanViewFlag":1,"PersonUsedSponsorFlag":8,"PersonAddress1":"sample string 9","PersonCity1":"sample string 10","PersonState1":"sample string 11","PersonZip1":"sample string 12","PersonPhone":"sample string 13","PersonFax":"sample string 14","PersonEmail":"sample string 15","PersonWWW":"sample string 16","PersonAddress2":"sample string 17","PersonCity2":"sample string 18","PersonState2":"sample string 19","PersonZip2":"sample string 20","PersonPhone2":"sample string 21","PersonFax2":"sample string 22","PersonEmail2":"sample string 23","PersonWWW2":"sample string 24"}\]);

Title: GET v1/{Client}/OfficeRecords/{OfficeRecordId}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-OfficeRecords-OfficeRecordId

Markdown Content:
Gets one Office Record.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| OfficeRecordId | The Id of the Office Record.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

[GranicusOfficeRecord](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusOfficeRecord)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| OfficeRecordId |  | integer | None.
 |
| OfficeRecordGuid |  | string | None.

 |
| OfficeRecordLastModifiedUtc |  | date | None.

 |
| OfficeRecordRowVersion |  | Collection of byte | None.

 |
| OfficeRecordFirstName |  | string | None.

 |
| OfficeRecordLastName |  | string | None.

 |
| OfficeRecordEmail |  | string | None.

 |
| OfficeRecordFullName |  | string | None.

 |
| OfficeRecordStartDate |  | date | Required

 |
| OfficeRecordEndDate |  | date | None.

 |
| OfficeRecordSort |  | integer | None.

 |
| OfficeRecordPersonId |  | integer | Required

 |
| OfficeRecordBodyId |  | integer | Required

 |
| OfficeRecordBodyName |  | string | None.

 |
| OfficeRecordTitle |  | string | None.

 |
| OfficeRecordVoteDivider |  | decimal number | Required

 |
| OfficeRecordExtendFlag |  | integer | Required

 |
| OfficeRecordMemberTypeId |  | integer | Required

 |
| OfficeRecordMemberType |  | string | None.

 |
| OfficeRecordSupportNameId |  | integer | None.

 |
| OfficeRecordSupportFullName |  | string | None.

 |
| OfficeRecordExtraText |  | string | None.

 |

### Response Formats

**Sample:**

{
  "OfficeRecordId": 1,
  "OfficeRecordGuid": "sample string 2",
  "OfficeRecordLastModifiedUtc": "2024-12-11T18:02:22.2512101-05:00",
  "OfficeRecordRowVersion": "QEA=",
  "OfficeRecordFirstName": "sample string 4",
  "OfficeRecordLastName": "sample string 5",
  "OfficeRecordEmail": "sample string 6",
  "OfficeRecordFullName": "sample string 7",
  "OfficeRecordStartDate": "2024-12-11T18:02:22.2512101-05:00",
  "OfficeRecordEndDate": "2024-12-11T18:02:22.2512101-05:00",
  "OfficeRecordSort": 9,
  "OfficeRecordPersonId": 10,
  "OfficeRecordBodyId": 11,
  "OfficeRecordBodyName": "sample string 12",
  "OfficeRecordTitle": "sample string 13",
  "OfficeRecordVoteDivider": 14.1,
  "OfficeRecordExtendFlag": 15,
  "OfficeRecordMemberTypeId": 16,
  "OfficeRecordMemberType": "sample string 17",
  "OfficeRecordSupportNameId": 1,
  "OfficeRecordSupportFullName": "sample string 18",
  "OfficeRecordExtraText": "sample string 19"
}

**Sample:**

<GranicusOfficeRecord xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <OfficeRecordBodyId\>11</OfficeRecordBodyId\>
  <OfficeRecordBodyName\>sample string 12</OfficeRecordBodyName\>
  <OfficeRecordEmail\>sample string 6</OfficeRecordEmail\>
  <OfficeRecordEndDate\>2024-12-11T18:02:22.2512101-05:00</OfficeRecordEndDate\>
  <OfficeRecordExtendFlag\>15</OfficeRecordExtendFlag\>
  <OfficeRecordExtraText\>sample string 19</OfficeRecordExtraText\>
  <OfficeRecordFirstName\>sample string 4</OfficeRecordFirstName\>
  <OfficeRecordFullName\>sample string 7</OfficeRecordFullName\>
  <OfficeRecordGuid\>sample string 2</OfficeRecordGuid\>
  <OfficeRecordId\>1</OfficeRecordId\>
  <OfficeRecordLastModifiedUtc\>2024-12-11T18:02:22.2512101-05:00</OfficeRecordLastModifiedUtc\>
  <OfficeRecordLastName\>sample string 5</OfficeRecordLastName\>
  <OfficeRecordMemberType\>sample string 17</OfficeRecordMemberType\>
  <OfficeRecordMemberTypeId\>16</OfficeRecordMemberTypeId\>
  <OfficeRecordPersonId\>10</OfficeRecordPersonId\>
  <OfficeRecordRowVersion\>QEA=</OfficeRecordRowVersion\>
  <OfficeRecordSort\>9</OfficeRecordSort\>
  <OfficeRecordStartDate\>2024-12-11T18:02:22.2512101-05:00</OfficeRecordStartDate\>
  <OfficeRecordSupportFullName\>sample string 18</OfficeRecordSupportFullName\>
  <OfficeRecordSupportNameId\>1</OfficeRecordSupportNameId\>
  <OfficeRecordTitle\>sample string 13</OfficeRecordTitle\>
  <OfficeRecordVoteDivider\>14.1</OfficeRecordVoteDivider\>
</GranicusOfficeRecord\>

**Sample:**

({"OfficeRecordId":1,"OfficeRecordGuid":"sample string 2","OfficeRecordLastModifiedUtc":"2024-12-11T18:02:22.2512101-05:00","OfficeRecordRowVersion":"QEA=","OfficeRecordFirstName":"sample string 4","OfficeRecordLastName":"sample string 5","OfficeRecordEmail":"sample string 6","OfficeRecordFullName":"sample string 7","OfficeRecordStartDate":"2024-12-11T18:02:22.2512101-05:00","OfficeRecordEndDate":"2024-12-11T18:02:22.2512101-05:00","OfficeRecordSort":9,"OfficeRecordPersonId":10,"OfficeRecordBodyId":11,"OfficeRecordBodyName":"sample string 12","OfficeRecordTitle":"sample string 13","OfficeRecordVoteDivider":14.1,"OfficeRecordExtendFlag":15,"OfficeRecordMemberTypeId":16,"OfficeRecordMemberType":"sample string 17","OfficeRecordSupportNameId":1,"OfficeRecordSupportFullName":"sample string 18","OfficeRecordExtraText":"sample string 19"});
Title: GET v1/{Client}/Bodies/{BodyId}/OfficeRecords

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Bodies-BodyId-OfficeRecords

Markdown Content:
Gets Office Records for a Body record.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| BodyId | The Id of the body record.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusOfficeRecord](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusOfficeRecord)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| OfficeRecordId |  | integer | None.
 |
| OfficeRecordGuid |  | string | None.

 |
| OfficeRecordLastModifiedUtc |  | date | None.

 |
| OfficeRecordRowVersion |  | Collection of byte | None.

 |
| OfficeRecordFirstName |  | string | None.

 |
| OfficeRecordLastName |  | string | None.

 |
| OfficeRecordEmail |  | string | None.

 |
| OfficeRecordFullName |  | string | None.

 |
| OfficeRecordStartDate |  | date | Required

 |
| OfficeRecordEndDate |  | date | None.

 |
| OfficeRecordSort |  | integer | None.

 |
| OfficeRecordPersonId |  | integer | Required

 |
| OfficeRecordBodyId |  | integer | Required

 |
| OfficeRecordBodyName |  | string | None.

 |
| OfficeRecordTitle |  | string | None.

 |
| OfficeRecordVoteDivider |  | decimal number | Required

 |
| OfficeRecordExtendFlag |  | integer | Required

 |
| OfficeRecordMemberTypeId |  | integer | Required

 |
| OfficeRecordMemberType |  | string | None.

 |
| OfficeRecordSupportNameId |  | integer | None.

 |
| OfficeRecordSupportFullName |  | string | None.

 |
| OfficeRecordExtraText |  | string | None.

 |

### Response Formats

**Sample:**

\[
  {
    "OfficeRecordId": 1,
    "OfficeRecordGuid": "sample string 2",
    "OfficeRecordLastModifiedUtc": "2024-12-11T18:02:09.1767132-05:00",
    "OfficeRecordRowVersion": "QEA=",
    "OfficeRecordFirstName": "sample string 4",
    "OfficeRecordLastName": "sample string 5",
    "OfficeRecordEmail": "sample string 6",
    "OfficeRecordFullName": "sample string 7",
    "OfficeRecordStartDate": "2024-12-11T18:02:09.1767132-05:00",
    "OfficeRecordEndDate": "2024-12-11T18:02:09.1767132-05:00",
    "OfficeRecordSort": 9,
    "OfficeRecordPersonId": 10,
    "OfficeRecordBodyId": 11,
    "OfficeRecordBodyName": "sample string 12",
    "OfficeRecordTitle": "sample string 13",
    "OfficeRecordVoteDivider": 14.1,
    "OfficeRecordExtendFlag": 15,
    "OfficeRecordMemberTypeId": 16,
    "OfficeRecordMemberType": "sample string 17",
    "OfficeRecordSupportNameId": 1,
    "OfficeRecordSupportFullName": "sample string 18",
    "OfficeRecordExtraText": "sample string 19"
  },
  {
    "OfficeRecordId": 1,
    "OfficeRecordGuid": "sample string 2",
    "OfficeRecordLastModifiedUtc": "2024-12-11T18:02:09.1767132-05:00",
    "OfficeRecordRowVersion": "QEA=",
    "OfficeRecordFirstName": "sample string 4",
    "OfficeRecordLastName": "sample string 5",
    "OfficeRecordEmail": "sample string 6",
    "OfficeRecordFullName": "sample string 7",
    "OfficeRecordStartDate": "2024-12-11T18:02:09.1767132-05:00",
    "OfficeRecordEndDate": "2024-12-11T18:02:09.1767132-05:00",
    "OfficeRecordSort": 9,
    "OfficeRecordPersonId": 10,
    "OfficeRecordBodyId": 11,
    "OfficeRecordBodyName": "sample string 12",
    "OfficeRecordTitle": "sample string 13",
    "OfficeRecordVoteDivider": 14.1,
    "OfficeRecordExtendFlag": 15,
    "OfficeRecordMemberTypeId": 16,
    "OfficeRecordMemberType": "sample string 17",
    "OfficeRecordSupportNameId": 1,
    "OfficeRecordSupportFullName": "sample string 18",
    "OfficeRecordExtraText": "sample string 19"
  }
\]

**Sample:**

<ArrayOfGranicusOfficeRecord xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusOfficeRecord\>
    <OfficeRecordBodyId\>11</OfficeRecordBodyId\>
    <OfficeRecordBodyName\>sample string 12</OfficeRecordBodyName\>
    <OfficeRecordEmail\>sample string 6</OfficeRecordEmail\>
    <OfficeRecordEndDate\>2024-12-11T18:02:09.1767132-05:00</OfficeRecordEndDate\>
    <OfficeRecordExtendFlag\>15</OfficeRecordExtendFlag\>
    <OfficeRecordExtraText\>sample string 19</OfficeRecordExtraText\>
    <OfficeRecordFirstName\>sample string 4</OfficeRecordFirstName\>
    <OfficeRecordFullName\>sample string 7</OfficeRecordFullName\>
    <OfficeRecordGuid\>sample string 2</OfficeRecordGuid\>
    <OfficeRecordId\>1</OfficeRecordId\>
    <OfficeRecordLastModifiedUtc\>2024-12-11T18:02:09.1767132-05:00</OfficeRecordLastModifiedUtc\>
    <OfficeRecordLastName\>sample string 5</OfficeRecordLastName\>
    <OfficeRecordMemberType\>sample string 17</OfficeRecordMemberType\>
    <OfficeRecordMemberTypeId\>16</OfficeRecordMemberTypeId\>
    <OfficeRecordPersonId\>10</OfficeRecordPersonId\>
    <OfficeRecordRowVersion\>QEA=</OfficeRecordRowVersion\>
    <OfficeRecordSort\>9</OfficeRecordSort\>
    <OfficeRecordStartDate\>2024-12-11T18:02:09.1767132-05:00</OfficeRecordStartDate\>
    <OfficeRecordSupportFullName\>sample string 18</OfficeRecordSupportFullName\>
    <OfficeRecordSupportNameId\>1</OfficeRecordSupportNameId\>
    <OfficeRecordTitle\>sample string 13</OfficeRecordTitle\>
    <OfficeRecordVoteDivider\>14.1</OfficeRecordVoteDivider\>
  </GranicusOfficeRecord\>
  <GranicusOfficeRecord\>
    <OfficeRecordBodyId\>11</OfficeRecordBodyId\>
    <OfficeRecordBodyName\>sample string 12</OfficeRecordBodyName\>
    <OfficeRecordEmail\>sample string 6</OfficeRecordEmail\>
    <OfficeRecordEndDate\>2024-12-11T18:02:09.1767132-05:00</OfficeRecordEndDate\>
    <OfficeRecordExtendFlag\>15</OfficeRecordExtendFlag\>
    <OfficeRecordExtraText\>sample string 19</OfficeRecordExtraText\>
    <OfficeRecordFirstName\>sample string 4</OfficeRecordFirstName\>
    <OfficeRecordFullName\>sample string 7</OfficeRecordFullName\>
    <OfficeRecordGuid\>sample string 2</OfficeRecordGuid\>
    <OfficeRecordId\>1</OfficeRecordId\>
    <OfficeRecordLastModifiedUtc\>2024-12-11T18:02:09.1767132-05:00</OfficeRecordLastModifiedUtc\>
    <OfficeRecordLastName\>sample string 5</OfficeRecordLastName\>
    <OfficeRecordMemberType\>sample string 17</OfficeRecordMemberType\>
    <OfficeRecordMemberTypeId\>16</OfficeRecordMemberTypeId\>
    <OfficeRecordPersonId\>10</OfficeRecordPersonId\>
    <OfficeRecordRowVersion\>QEA=</OfficeRecordRowVersion\>
    <OfficeRecordSort\>9</OfficeRecordSort\>
    <OfficeRecordStartDate\>2024-12-11T18:02:09.1767132-05:00</OfficeRecordStartDate\>
    <OfficeRecordSupportFullName\>sample string 18</OfficeRecordSupportFullName\>
    <OfficeRecordSupportNameId\>1</OfficeRecordSupportNameId\>
    <OfficeRecordTitle\>sample string 13</OfficeRecordTitle\>
    <OfficeRecordVoteDivider\>14.1</OfficeRecordVoteDivider\>
  </GranicusOfficeRecord\>
</ArrayOfGranicusOfficeRecord\>

**Sample:**

(\[{"OfficeRecordId":1,"OfficeRecordGuid":"sample string 2","OfficeRecordLastModifiedUtc":"2024-12-11T18:02:09.1767132-05:00","OfficeRecordRowVersion":"QEA=","OfficeRecordFirstName":"sample string 4","OfficeRecordLastName":"sample string 5","OfficeRecordEmail":"sample string 6","OfficeRecordFullName":"sample string 7","OfficeRecordStartDate":"2024-12-11T18:02:09.1767132-05:00","OfficeRecordEndDate":"2024-12-11T18:02:09.1767132-05:00","OfficeRecordSort":9,"OfficeRecordPersonId":10,"OfficeRecordBodyId":11,"OfficeRecordBodyName":"sample string 12","OfficeRecordTitle":"sample string 13","OfficeRecordVoteDivider":14.1,"OfficeRecordExtendFlag":15,"OfficeRecordMemberTypeId":16,"OfficeRecordMemberType":"sample string 17","OfficeRecordSupportNameId":1,"OfficeRecordSupportFullName":"sample string 18","OfficeRecordExtraText":"sample string 19"},{"OfficeRecordId":1,"OfficeRecordGuid":"sample string 2","OfficeRecordLastModifiedUtc":"2024-12-11T18:02:09.1767132-05:00","OfficeRecordRowVersion":"QEA=","OfficeRecordFirstName":"sample string 4","OfficeRecordLastName":"sample string 5","OfficeRecordEmail":"sample string 6","OfficeRecordFullName":"sample string 7","OfficeRecordStartDate":"2024-12-11T18:02:09.1767132-05:00","OfficeRecordEndDate":"2024-12-11T18:02:09.1767132-05:00","OfficeRecordSort":9,"OfficeRecordPersonId":10,"OfficeRecordBodyId":11,"OfficeRecordBodyName":"sample string 12","OfficeRecordTitle":"sample string 13","OfficeRecordVoteDivider":14.1,"OfficeRecordExtendFlag":15,"OfficeRecordMemberTypeId":16,"OfficeRecordMemberType":"sample string 17","OfficeRecordSupportNameId":1,"OfficeRecordSupportFullName":"sample string 18","OfficeRecordExtraText":"sample string 19"}\]);

Title: GET v1/{Client}/Persons/{PersonId}/OfficeRecords

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Persons-PersonId-OfficeRecords

Markdown Content:
Gets Office Records for a Person record.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| PersonId | The Id of the person record.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusOfficeRecord](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusOfficeRecord)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| OfficeRecordId |  | integer | None.
 |
| OfficeRecordGuid |  | string | None.

 |
| OfficeRecordLastModifiedUtc |  | date | None.

 |
| OfficeRecordRowVersion |  | Collection of byte | None.

 |
| OfficeRecordFirstName |  | string | None.

 |
| OfficeRecordLastName |  | string | None.

 |
| OfficeRecordEmail |  | string | None.

 |
| OfficeRecordFullName |  | string | None.

 |
| OfficeRecordStartDate |  | date | Required

 |
| OfficeRecordEndDate |  | date | None.

 |
| OfficeRecordSort |  | integer | None.

 |
| OfficeRecordPersonId |  | integer | Required

 |
| OfficeRecordBodyId |  | integer | Required

 |
| OfficeRecordBodyName |  | string | None.

 |
| OfficeRecordTitle |  | string | None.

 |
| OfficeRecordVoteDivider |  | decimal number | Required

 |
| OfficeRecordExtendFlag |  | integer | Required

 |
| OfficeRecordMemberTypeId |  | integer | Required

 |
| OfficeRecordMemberType |  | string | None.

 |
| OfficeRecordSupportNameId |  | integer | None.

 |
| OfficeRecordSupportFullName |  | string | None.

 |
| OfficeRecordExtraText |  | string | None.

 |

### Response Formats

**Sample:**

\[
  {
    "OfficeRecordId": 1,
    "OfficeRecordGuid": "sample string 2",
    "OfficeRecordLastModifiedUtc": "2024-12-11T18:01:58.9291302-05:00",
    "OfficeRecordRowVersion": "QEA=",
    "OfficeRecordFirstName": "sample string 4",
    "OfficeRecordLastName": "sample string 5",
    "OfficeRecordEmail": "sample string 6",
    "OfficeRecordFullName": "sample string 7",
    "OfficeRecordStartDate": "2024-12-11T18:01:58.9291302-05:00",
    "OfficeRecordEndDate": "2024-12-11T18:01:58.9291302-05:00",
    "OfficeRecordSort": 9,
    "OfficeRecordPersonId": 10,
    "OfficeRecordBodyId": 11,
    "OfficeRecordBodyName": "sample string 12",
    "OfficeRecordTitle": "sample string 13",
    "OfficeRecordVoteDivider": 14.1,
    "OfficeRecordExtendFlag": 15,
    "OfficeRecordMemberTypeId": 16,
    "OfficeRecordMemberType": "sample string 17",
    "OfficeRecordSupportNameId": 1,
    "OfficeRecordSupportFullName": "sample string 18",
    "OfficeRecordExtraText": "sample string 19"
  },
  {
    "OfficeRecordId": 1,
    "OfficeRecordGuid": "sample string 2",
    "OfficeRecordLastModifiedUtc": "2024-12-11T18:01:58.9291302-05:00",
    "OfficeRecordRowVersion": "QEA=",
    "OfficeRecordFirstName": "sample string 4",
    "OfficeRecordLastName": "sample string 5",
    "OfficeRecordEmail": "sample string 6",
    "OfficeRecordFullName": "sample string 7",
    "OfficeRecordStartDate": "2024-12-11T18:01:58.9291302-05:00",
    "OfficeRecordEndDate": "2024-12-11T18:01:58.9291302-05:00",
    "OfficeRecordSort": 9,
    "OfficeRecordPersonId": 10,
    "OfficeRecordBodyId": 11,
    "OfficeRecordBodyName": "sample string 12",
    "OfficeRecordTitle": "sample string 13",
    "OfficeRecordVoteDivider": 14.1,
    "OfficeRecordExtendFlag": 15,
    "OfficeRecordMemberTypeId": 16,
    "OfficeRecordMemberType": "sample string 17",
    "OfficeRecordSupportNameId": 1,
    "OfficeRecordSupportFullName": "sample string 18",
    "OfficeRecordExtraText": "sample string 19"
  }
\]

**Sample:**

<ArrayOfGranicusOfficeRecord xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusOfficeRecord\>
    <OfficeRecordBodyId\>11</OfficeRecordBodyId\>
    <OfficeRecordBodyName\>sample string 12</OfficeRecordBodyName\>
    <OfficeRecordEmail\>sample string 6</OfficeRecordEmail\>
    <OfficeRecordEndDate\>2024-12-11T18:01:58.9291302-05:00</OfficeRecordEndDate\>
    <OfficeRecordExtendFlag\>15</OfficeRecordExtendFlag\>
    <OfficeRecordExtraText\>sample string 19</OfficeRecordExtraText\>
    <OfficeRecordFirstName\>sample string 4</OfficeRecordFirstName\>
    <OfficeRecordFullName\>sample string 7</OfficeRecordFullName\>
    <OfficeRecordGuid\>sample string 2</OfficeRecordGuid\>
    <OfficeRecordId\>1</OfficeRecordId\>
    <OfficeRecordLastModifiedUtc\>2024-12-11T18:01:58.9291302-05:00</OfficeRecordLastModifiedUtc\>
    <OfficeRecordLastName\>sample string 5</OfficeRecordLastName\>
    <OfficeRecordMemberType\>sample string 17</OfficeRecordMemberType\>
    <OfficeRecordMemberTypeId\>16</OfficeRecordMemberTypeId\>
    <OfficeRecordPersonId\>10</OfficeRecordPersonId\>
    <OfficeRecordRowVersion\>QEA=</OfficeRecordRowVersion\>
    <OfficeRecordSort\>9</OfficeRecordSort\>
    <OfficeRecordStartDate\>2024-12-11T18:01:58.9291302-05:00</OfficeRecordStartDate\>
    <OfficeRecordSupportFullName\>sample string 18</OfficeRecordSupportFullName\>
    <OfficeRecordSupportNameId\>1</OfficeRecordSupportNameId\>
    <OfficeRecordTitle\>sample string 13</OfficeRecordTitle\>
    <OfficeRecordVoteDivider\>14.1</OfficeRecordVoteDivider\>
  </GranicusOfficeRecord\>
  <GranicusOfficeRecord\>
    <OfficeRecordBodyId\>11</OfficeRecordBodyId\>
    <OfficeRecordBodyName\>sample string 12</OfficeRecordBodyName\>
    <OfficeRecordEmail\>sample string 6</OfficeRecordEmail\>
    <OfficeRecordEndDate\>2024-12-11T18:01:58.9291302-05:00</OfficeRecordEndDate\>
    <OfficeRecordExtendFlag\>15</OfficeRecordExtendFlag\>
    <OfficeRecordExtraText\>sample string 19</OfficeRecordExtraText\>
    <OfficeRecordFirstName\>sample string 4</OfficeRecordFirstName\>
    <OfficeRecordFullName\>sample string 7</OfficeRecordFullName\>
    <OfficeRecordGuid\>sample string 2</OfficeRecordGuid\>
    <OfficeRecordId\>1</OfficeRecordId\>
    <OfficeRecordLastModifiedUtc\>2024-12-11T18:01:58.9291302-05:00</OfficeRecordLastModifiedUtc\>
    <OfficeRecordLastName\>sample string 5</OfficeRecordLastName\>
    <OfficeRecordMemberType\>sample string 17</OfficeRecordMemberType\>
    <OfficeRecordMemberTypeId\>16</OfficeRecordMemberTypeId\>
    <OfficeRecordPersonId\>10</OfficeRecordPersonId\>
    <OfficeRecordRowVersion\>QEA=</OfficeRecordRowVersion\>
    <OfficeRecordSort\>9</OfficeRecordSort\>
    <OfficeRecordStartDate\>2024-12-11T18:01:58.9291302-05:00</OfficeRecordStartDate\>
    <OfficeRecordSupportFullName\>sample string 18</OfficeRecordSupportFullName\>
    <OfficeRecordSupportNameId\>1</OfficeRecordSupportNameId\>
    <OfficeRecordTitle\>sample string 13</OfficeRecordTitle\>
    <OfficeRecordVoteDivider\>14.1</OfficeRecordVoteDivider\>
  </GranicusOfficeRecord\>
</ArrayOfGranicusOfficeRecord\>

**Sample:**

(\[{"OfficeRecordId":1,"OfficeRecordGuid":"sample string 2","OfficeRecordLastModifiedUtc":"2024-12-11T18:01:58.9291302-05:00","OfficeRecordRowVersion":"QEA=","OfficeRecordFirstName":"sample string 4","OfficeRecordLastName":"sample string 5","OfficeRecordEmail":"sample string 6","OfficeRecordFullName":"sample string 7","OfficeRecordStartDate":"2024-12-11T18:01:58.9291302-05:00","OfficeRecordEndDate":"2024-12-11T18:01:58.9291302-05:00","OfficeRecordSort":9,"OfficeRecordPersonId":10,"OfficeRecordBodyId":11,"OfficeRecordBodyName":"sample string 12","OfficeRecordTitle":"sample string 13","OfficeRecordVoteDivider":14.1,"OfficeRecordExtendFlag":15,"OfficeRecordMemberTypeId":16,"OfficeRecordMemberType":"sample string 17","OfficeRecordSupportNameId":1,"OfficeRecordSupportFullName":"sample string 18","OfficeRecordExtraText":"sample string 19"},{"OfficeRecordId":1,"OfficeRecordGuid":"sample string 2","OfficeRecordLastModifiedUtc":"2024-12-11T18:01:58.9291302-05:00","OfficeRecordRowVersion":"QEA=","OfficeRecordFirstName":"sample string 4","OfficeRecordLastName":"sample string 5","OfficeRecordEmail":"sample string 6","OfficeRecordFullName":"sample string 7","OfficeRecordStartDate":"2024-12-11T18:01:58.9291302-05:00","OfficeRecordEndDate":"2024-12-11T18:01:58.9291302-05:00","OfficeRecordSort":9,"OfficeRecordPersonId":10,"OfficeRecordBodyId":11,"OfficeRecordBodyName":"sample string 12","OfficeRecordTitle":"sample string 13","OfficeRecordVoteDivider":14.1,"OfficeRecordExtendFlag":15,"OfficeRecordMemberTypeId":16,"OfficeRecordMemberType":"sample string 17","OfficeRecordSupportNameId":1,"OfficeRecordSupportFullName":"sample string 18","OfficeRecordExtraText":"sample string 19"}\]);

Title: GET v1/{Client}/OfficeRecords

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-OfficeRecords

Markdown Content:
Gets all Office Records.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusOfficeRecord](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusOfficeRecord)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| OfficeRecordId |  | integer | None.
 |
| OfficeRecordGuid |  | string | None.

 |
| OfficeRecordLastModifiedUtc |  | date | None.

 |
| OfficeRecordRowVersion |  | Collection of byte | None.

 |
| OfficeRecordFirstName |  | string | None.

 |
| OfficeRecordLastName |  | string | None.

 |
| OfficeRecordEmail |  | string | None.

 |
| OfficeRecordFullName |  | string | None.

 |
| OfficeRecordStartDate |  | date | Required

 |
| OfficeRecordEndDate |  | date | None.

 |
| OfficeRecordSort |  | integer | None.

 |
| OfficeRecordPersonId |  | integer | Required

 |
| OfficeRecordBodyId |  | integer | Required

 |
| OfficeRecordBodyName |  | string | None.

 |
| OfficeRecordTitle |  | string | None.

 |
| OfficeRecordVoteDivider |  | decimal number | Required

 |
| OfficeRecordExtendFlag |  | integer | Required

 |
| OfficeRecordMemberTypeId |  | integer | Required

 |
| OfficeRecordMemberType |  | string | None.

 |
| OfficeRecordSupportNameId |  | integer | None.

 |
| OfficeRecordSupportFullName |  | string | None.

 |
| OfficeRecordExtraText |  | string | None.

 |

### Response Formats

**Sample:**

\[
  {
    "OfficeRecordId": 1,
    "OfficeRecordGuid": "sample string 2",
    "OfficeRecordLastModifiedUtc": "2024-12-11T18:01:47.0109971-05:00",
    "OfficeRecordRowVersion": "QEA=",
    "OfficeRecordFirstName": "sample string 4",
    "OfficeRecordLastName": "sample string 5",
    "OfficeRecordEmail": "sample string 6",
    "OfficeRecordFullName": "sample string 7",
    "OfficeRecordStartDate": "2024-12-11T18:01:47.0109971-05:00",
    "OfficeRecordEndDate": "2024-12-11T18:01:47.0109971-05:00",
    "OfficeRecordSort": 9,
    "OfficeRecordPersonId": 10,
    "OfficeRecordBodyId": 11,
    "OfficeRecordBodyName": "sample string 12",
    "OfficeRecordTitle": "sample string 13",
    "OfficeRecordVoteDivider": 14.1,
    "OfficeRecordExtendFlag": 15,
    "OfficeRecordMemberTypeId": 16,
    "OfficeRecordMemberType": "sample string 17",
    "OfficeRecordSupportNameId": 1,
    "OfficeRecordSupportFullName": "sample string 18",
    "OfficeRecordExtraText": "sample string 19"
  },
  {
    "OfficeRecordId": 1,
    "OfficeRecordGuid": "sample string 2",
    "OfficeRecordLastModifiedUtc": "2024-12-11T18:01:47.0109971-05:00",
    "OfficeRecordRowVersion": "QEA=",
    "OfficeRecordFirstName": "sample string 4",
    "OfficeRecordLastName": "sample string 5",
    "OfficeRecordEmail": "sample string 6",
    "OfficeRecordFullName": "sample string 7",
    "OfficeRecordStartDate": "2024-12-11T18:01:47.0109971-05:00",
    "OfficeRecordEndDate": "2024-12-11T18:01:47.0109971-05:00",
    "OfficeRecordSort": 9,
    "OfficeRecordPersonId": 10,
    "OfficeRecordBodyId": 11,
    "OfficeRecordBodyName": "sample string 12",
    "OfficeRecordTitle": "sample string 13",
    "OfficeRecordVoteDivider": 14.1,
    "OfficeRecordExtendFlag": 15,
    "OfficeRecordMemberTypeId": 16,
    "OfficeRecordMemberType": "sample string 17",
    "OfficeRecordSupportNameId": 1,
    "OfficeRecordSupportFullName": "sample string 18",
    "OfficeRecordExtraText": "sample string 19"
  }
\]

**Sample:**

<ArrayOfGranicusOfficeRecord xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusOfficeRecord\>
    <OfficeRecordBodyId\>11</OfficeRecordBodyId\>
    <OfficeRecordBodyName\>sample string 12</OfficeRecordBodyName\>
    <OfficeRecordEmail\>sample string 6</OfficeRecordEmail\>
    <OfficeRecordEndDate\>2024-12-11T18:01:47.0109971-05:00</OfficeRecordEndDate\>
    <OfficeRecordExtendFlag\>15</OfficeRecordExtendFlag\>
    <OfficeRecordExtraText\>sample string 19</OfficeRecordExtraText\>
    <OfficeRecordFirstName\>sample string 4</OfficeRecordFirstName\>
    <OfficeRecordFullName\>sample string 7</OfficeRecordFullName\>
    <OfficeRecordGuid\>sample string 2</OfficeRecordGuid\>
    <OfficeRecordId\>1</OfficeRecordId\>
    <OfficeRecordLastModifiedUtc\>2024-12-11T18:01:47.0109971-05:00</OfficeRecordLastModifiedUtc\>
    <OfficeRecordLastName\>sample string 5</OfficeRecordLastName\>
    <OfficeRecordMemberType\>sample string 17</OfficeRecordMemberType\>
    <OfficeRecordMemberTypeId\>16</OfficeRecordMemberTypeId\>
    <OfficeRecordPersonId\>10</OfficeRecordPersonId\>
    <OfficeRecordRowVersion\>QEA=</OfficeRecordRowVersion\>
    <OfficeRecordSort\>9</OfficeRecordSort\>
    <OfficeRecordStartDate\>2024-12-11T18:01:47.0109971-05:00</OfficeRecordStartDate\>
    <OfficeRecordSupportFullName\>sample string 18</OfficeRecordSupportFullName\>
    <OfficeRecordSupportNameId\>1</OfficeRecordSupportNameId\>
    <OfficeRecordTitle\>sample string 13</OfficeRecordTitle\>
    <OfficeRecordVoteDivider\>14.1</OfficeRecordVoteDivider\>
  </GranicusOfficeRecord\>
  <GranicusOfficeRecord\>
    <OfficeRecordBodyId\>11</OfficeRecordBodyId\>
    <OfficeRecordBodyName\>sample string 12</OfficeRecordBodyName\>
    <OfficeRecordEmail\>sample string 6</OfficeRecordEmail\>
    <OfficeRecordEndDate\>2024-12-11T18:01:47.0109971-05:00</OfficeRecordEndDate\>
    <OfficeRecordExtendFlag\>15</OfficeRecordExtendFlag\>
    <OfficeRecordExtraText\>sample string 19</OfficeRecordExtraText\>
    <OfficeRecordFirstName\>sample string 4</OfficeRecordFirstName\>
    <OfficeRecordFullName\>sample string 7</OfficeRecordFullName\>
    <OfficeRecordGuid\>sample string 2</OfficeRecordGuid\>
    <OfficeRecordId\>1</OfficeRecordId\>
    <OfficeRecordLastModifiedUtc\>2024-12-11T18:01:47.0109971-05:00</OfficeRecordLastModifiedUtc\>
    <OfficeRecordLastName\>sample string 5</OfficeRecordLastName\>
    <OfficeRecordMemberType\>sample string 17</OfficeRecordMemberType\>
    <OfficeRecordMemberTypeId\>16</OfficeRecordMemberTypeId\>
    <OfficeRecordPersonId\>10</OfficeRecordPersonId\>
    <OfficeRecordRowVersion\>QEA=</OfficeRecordRowVersion\>
    <OfficeRecordSort\>9</OfficeRecordSort\>
    <OfficeRecordStartDate\>2024-12-11T18:01:47.0109971-05:00</OfficeRecordStartDate\>
    <OfficeRecordSupportFullName\>sample string 18</OfficeRecordSupportFullName\>
    <OfficeRecordSupportNameId\>1</OfficeRecordSupportNameId\>
    <OfficeRecordTitle\>sample string 13</OfficeRecordTitle\>
    <OfficeRecordVoteDivider\>14.1</OfficeRecordVoteDivider\>
  </GranicusOfficeRecord\>
</ArrayOfGranicusOfficeRecord\>

**Sample:**

(\[{"OfficeRecordId":1,"OfficeRecordGuid":"sample string 2","OfficeRecordLastModifiedUtc":"2024-12-11T18:01:47.0109971-05:00","OfficeRecordRowVersion":"QEA=","OfficeRecordFirstName":"sample string 4","OfficeRecordLastName":"sample string 5","OfficeRecordEmail":"sample string 6","OfficeRecordFullName":"sample string 7","OfficeRecordStartDate":"2024-12-11T18:01:47.0109971-05:00","OfficeRecordEndDate":"2024-12-11T18:01:47.0109971-05:00","OfficeRecordSort":9,"OfficeRecordPersonId":10,"OfficeRecordBodyId":11,"OfficeRecordBodyName":"sample string 12","OfficeRecordTitle":"sample string 13","OfficeRecordVoteDivider":14.1,"OfficeRecordExtendFlag":15,"OfficeRecordMemberTypeId":16,"OfficeRecordMemberType":"sample string 17","OfficeRecordSupportNameId":1,"OfficeRecordSupportFullName":"sample string 18","OfficeRecordExtraText":"sample string 19"},{"OfficeRecordId":1,"OfficeRecordGuid":"sample string 2","OfficeRecordLastModifiedUtc":"2024-12-11T18:01:47.0109971-05:00","OfficeRecordRowVersion":"QEA=","OfficeRecordFirstName":"sample string 4","OfficeRecordLastName":"sample string 5","OfficeRecordEmail":"sample string 6","OfficeRecordFullName":"sample string 7","OfficeRecordStartDate":"2024-12-11T18:01:47.0109971-05:00","OfficeRecordEndDate":"2024-12-11T18:01:47.0109971-05:00","OfficeRecordSort":9,"OfficeRecordPersonId":10,"OfficeRecordBodyId":11,"OfficeRecordBodyName":"sample string 12","OfficeRecordTitle":"sample string 13","OfficeRecordVoteDivider":14.1,"OfficeRecordExtendFlag":15,"OfficeRecordMemberTypeId":16,"OfficeRecordMemberType":"sample string 17","OfficeRecordSupportNameId":1,"OfficeRecordSupportFullName":"sample string 18","OfficeRecordExtraText":"sample string 19"}\]);
Title: GET v1/{Client}/Matters/{MatterId}/Versions

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Matters-MatterId-Versions

Markdown Content:
Gets Matter Text versions for one Matter record.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| MatterId | The Id of the Matter record.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusKeyValue](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusKeyValue)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Key |  | string | None.
 |
| Value |  | string | None.

 |

### Response Formats

**Sample:**

\[
  {
    "Key": "sample string 1",
    "Value": "sample string 2"
  },
  {
    "Key": "sample string 1",
    "Value": "sample string 2"
  }
\]

**Sample:**

<ArrayOfGranicusKeyValue xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusKeyValue\>
    <Key\>sample string 1</Key\>
    <Value\>sample string 2</Value\>
  </GranicusKeyValue\>
  <GranicusKeyValue\>
    <Key\>sample string 1</Key\>
    <Value\>sample string 2</Value\>
  </GranicusKeyValue\>
</ArrayOfGranicusKeyValue\>

**Sample:**

(\[{"Key":"sample string 1","Value":"sample string 2"},{"Key":"sample string 1","Value":"sample string 2"}\]);

Title: GET v1/{Client}/Matters/{MatterId}/Texts/{MatterTextId}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Matters-MatterId-Texts-MatterTextId

Markdown Content:
Gets one Matter Text.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| MatterTextId | The MatterTextId of the Matter Text.

 | integer | Required

 |
| MatterId |  | string | None.

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

[GranicusMatterText](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusMatterText)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| MatterTextId |  | integer | None.
 |
| MatterTextGuid |  | string | None.

 |
| MatterTextLastModifiedUtc |  | date | None.

 |
| MatterTextRowVersion |  | Collection of byte | None.

 |
| MatterTextMatterId |  | integer | Required

 |
| MatterTextVersion |  | string | None.

 |
| MatterTextPlain |  | string | None.

 |
| MatterTextRtf |  | string | None.

 |

### Response Formats

**Sample:**

{
  "MatterTextId": 1,
  "MatterTextGuid": "sample string 2",
  "MatterTextLastModifiedUtc": "2024-12-11T18:01:13.6343973-05:00",
  "MatterTextRowVersion": "QEA=",
  "MatterTextMatterId": 4,
  "MatterTextVersion": "sample string 5",
  "MatterTextPlain": "sample string 6",
  "MatterTextRtf": "sample string 7"
}

**Sample:**

<GranicusMatterText xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <MatterTextGuid\>sample string 2</MatterTextGuid\>
  <MatterTextId\>1</MatterTextId\>
  <MatterTextLastModifiedUtc\>2024-12-11T18:01:13.6343973-05:00</MatterTextLastModifiedUtc\>
  <MatterTextMatterId\>4</MatterTextMatterId\>
  <MatterTextPlain\>sample string 6</MatterTextPlain\>
  <MatterTextRowVersion\>QEA=</MatterTextRowVersion\>
  <MatterTextRtf\>sample string 7</MatterTextRtf\>
  <MatterTextVersion\>sample string 5</MatterTextVersion\>
</GranicusMatterText\>

**Sample:**

({"MatterTextId":1,"MatterTextGuid":"sample string 2","MatterTextLastModifiedUtc":"2024-12-11T18:01:13.6343973-05:00","MatterTextRowVersion":"QEA=","MatterTextMatterId":4,"MatterTextVersion":"sample string 5","MatterTextPlain":"sample string 6","MatterTextRtf":"sample string 7"});

Title: GET v1/{Client}/MatterStatuses/{MatterStatusId}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-MatterStatuses-MatterStatusId

Markdown Content:
Gets one Matter Status.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| MatterStatusId | The Id of the Matter Status.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

[GranicusMatterStatus](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusMatterStatus)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| MatterStatusId |  | integer | None.
 |
| MatterStatusGuid |  | string | None.

 |
| MatterStatusLastModifiedUtc |  | date | None.

 |
| MatterStatusRowVersion |  | Collection of byte | None.

 |
| MatterStatusName |  | string | Required

 |
| MatterStatusSort |  | integer | None.

 |
| MatterStatusActiveFlag |  | integer | None.

 |
| MatterStatusDescription |  | string | None.

 |
| MatterStatusUsedFlag |  | integer | None.

 |
| MatterStatusPublicFlag |  | integer | None.

 |

### Response Formats

**Sample:**

{
  "MatterStatusId": 1,
  "MatterStatusGuid": "sample string 2",
  "MatterStatusLastModifiedUtc": "2024-12-11T18:00:56.6721999-05:00",
  "MatterStatusRowVersion": "QEA=",
  "MatterStatusName": "sample string 4",
  "MatterStatusSort": 5,
  "MatterStatusActiveFlag": 6,
  "MatterStatusDescription": "sample string 7",
  "MatterStatusUsedFlag": 8,
  "MatterStatusPublicFlag": 9
}

**Sample:**

<GranicusMatterStatus xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <MatterStatusActiveFlag\>6</MatterStatusActiveFlag\>
  <MatterStatusDescription\>sample string 7</MatterStatusDescription\>
  <MatterStatusGuid\>sample string 2</MatterStatusGuid\>
  <MatterStatusId\>1</MatterStatusId\>
  <MatterStatusLastModifiedUtc\>2024-12-11T18:00:56.6721999-05:00</MatterStatusLastModifiedUtc\>
  <MatterStatusName\>sample string 4</MatterStatusName\>
  <MatterStatusPublicFlag\>9</MatterStatusPublicFlag\>
  <MatterStatusRowVersion\>QEA=</MatterStatusRowVersion\>
  <MatterStatusSort\>5</MatterStatusSort\>
  <MatterStatusUsedFlag\>8</MatterStatusUsedFlag\>
</GranicusMatterStatus\>

**Sample:**

({"MatterStatusId":1,"MatterStatusGuid":"sample string 2","MatterStatusLastModifiedUtc":"2024-12-11T18:00:56.6721999-05:00","MatterStatusRowVersion":"QEA=","MatterStatusName":"sample string 4","MatterStatusSort":5,"MatterStatusActiveFlag":6,"MatterStatusDescription":"sample string 7","MatterStatusUsedFlag":8,"MatterStatusPublicFlag":9});

Title: GET v1/{Client}/MatterStatuses

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-MatterStatuses

Markdown Content:
Gets all Matter Statuses.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusMatterStatus](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusMatterStatus)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| MatterStatusId |  | integer | None.
 |
| MatterStatusGuid |  | string | None.

 |
| MatterStatusLastModifiedUtc |  | date | None.

 |
| MatterStatusRowVersion |  | Collection of byte | None.

 |
| MatterStatusName |  | string | Required

 |
| MatterStatusSort |  | integer | None.

 |
| MatterStatusActiveFlag |  | integer | None.

 |
| MatterStatusDescription |  | string | None.

 |
| MatterStatusUsedFlag |  | integer | None.

 |
| MatterStatusPublicFlag |  | integer | None.

 |

### Response Formats

**Sample:**

\[
  {
    "MatterStatusId": 1,
    "MatterStatusGuid": "sample string 2",
    "MatterStatusLastModifiedUtc": "2024-12-11T18:00:51.3701924-05:00",
    "MatterStatusRowVersion": "QEA=",
    "MatterStatusName": "sample string 4",
    "MatterStatusSort": 5,
    "MatterStatusActiveFlag": 6,
    "MatterStatusDescription": "sample string 7",
    "MatterStatusUsedFlag": 8,
    "MatterStatusPublicFlag": 9
  },
  {
    "MatterStatusId": 1,
    "MatterStatusGuid": "sample string 2",
    "MatterStatusLastModifiedUtc": "2024-12-11T18:00:51.3701924-05:00",
    "MatterStatusRowVersion": "QEA=",
    "MatterStatusName": "sample string 4",
    "MatterStatusSort": 5,
    "MatterStatusActiveFlag": 6,
    "MatterStatusDescription": "sample string 7",
    "MatterStatusUsedFlag": 8,
    "MatterStatusPublicFlag": 9
  }
\]

**Sample:**

<ArrayOfGranicusMatterStatus xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusMatterStatus\>
    <MatterStatusActiveFlag\>6</MatterStatusActiveFlag\>
    <MatterStatusDescription\>sample string 7</MatterStatusDescription\>
    <MatterStatusGuid\>sample string 2</MatterStatusGuid\>
    <MatterStatusId\>1</MatterStatusId\>
    <MatterStatusLastModifiedUtc\>2024-12-11T18:00:51.3701924-05:00</MatterStatusLastModifiedUtc\>
    <MatterStatusName\>sample string 4</MatterStatusName\>
    <MatterStatusPublicFlag\>9</MatterStatusPublicFlag\>
    <MatterStatusRowVersion\>QEA=</MatterStatusRowVersion\>
    <MatterStatusSort\>5</MatterStatusSort\>
    <MatterStatusUsedFlag\>8</MatterStatusUsedFlag\>
  </GranicusMatterStatus\>
  <GranicusMatterStatus\>
    <MatterStatusActiveFlag\>6</MatterStatusActiveFlag\>
    <MatterStatusDescription\>sample string 7</MatterStatusDescription\>
    <MatterStatusGuid\>sample string 2</MatterStatusGuid\>
    <MatterStatusId\>1</MatterStatusId\>
    <MatterStatusLastModifiedUtc\>2024-12-11T18:00:51.3701924-05:00</MatterStatusLastModifiedUtc\>
    <MatterStatusName\>sample string 4</MatterStatusName\>
    <MatterStatusPublicFlag\>9</MatterStatusPublicFlag\>
    <MatterStatusRowVersion\>QEA=</MatterStatusRowVersion\>
    <MatterStatusSort\>5</MatterStatusSort\>
    <MatterStatusUsedFlag\>8</MatterStatusUsedFlag\>
  </GranicusMatterStatus\>
</ArrayOfGranicusMatterStatus\>

**Sample:**

(\[{"MatterStatusId":1,"MatterStatusGuid":"sample string 2","MatterStatusLastModifiedUtc":"2024-12-11T18:00:51.3701924-05:00","MatterStatusRowVersion":"QEA=","MatterStatusName":"sample string 4","MatterStatusSort":5,"MatterStatusActiveFlag":6,"MatterStatusDescription":"sample string 7","MatterStatusUsedFlag":8,"MatterStatusPublicFlag":9},{"MatterStatusId":1,"MatterStatusGuid":"sample string 2","MatterStatusLastModifiedUtc":"2024-12-11T18:00:51.3701924-05:00","MatterStatusRowVersion":"QEA=","MatterStatusName":"sample string 4","MatterStatusSort":5,"MatterStatusActiveFlag":6,"MatterStatusDescription":"sample string 7","MatterStatusUsedFlag":8,"MatterStatusPublicFlag":9}\]);

Title: GET v1/{Client}/Matters/{MatterId}/Sponsors/{MatterSponsorId}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Matters-MatterId-Sponsors-MatterSponsorId

Markdown Content:
Gets one Matter Sponsor for one Matter record.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| MatterId |  | integer | Required

 |
| MatterSponsorId | The MatterSponsorId of the Matter record.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

[GranicusMatterSponsor](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusMatterSponsor)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| MatterSponsorId |  | integer | None.
 |
| MatterSponsorGuid |  | string | None.

 |
| MatterSponsorLastModifiedUtc |  | date | None.

 |
| MatterSponsorRowVersion |  | Collection of byte | None.

 |
| MatterSponsorMatterId |  | integer | Required

 |
| MatterSponsorMatterVersion |  | string | Required

 |
| MatterSponsorNameId |  | integer | None.

 |
| MatterSponsorBodyId |  | integer | None.

 |
| MatterSponsorName |  | string | None.

 |
| MatterSponsorSequence |  | integer | None.

 |
| MatterSponsorLinkFlag |  | integer | None.

 |

### Response Formats

**Sample:**

{
  "MatterSponsorId": 1,
  "MatterSponsorGuid": "sample string 2",
  "MatterSponsorLastModifiedUtc": "2024-12-11T18:00:30.3790629-05:00",
  "MatterSponsorRowVersion": "QEA=",
  "MatterSponsorMatterId": 4,
  "MatterSponsorMatterVersion": "sample string 5",
  "MatterSponsorNameId": 1,
  "MatterSponsorBodyId": 1,
  "MatterSponsorName": "sample string 6",
  "MatterSponsorSequence": 7,
  "MatterSponsorLinkFlag": 8
}

**Sample:**

<GranicusMatterSponsor xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <MatterSponsorBodyId\>1</MatterSponsorBodyId\>
  <MatterSponsorGuid\>sample string 2</MatterSponsorGuid\>
  <MatterSponsorId\>1</MatterSponsorId\>
  <MatterSponsorLastModifiedUtc\>2024-12-11T18:00:30.3790629-05:00</MatterSponsorLastModifiedUtc\>
  <MatterSponsorLinkFlag\>8</MatterSponsorLinkFlag\>
  <MatterSponsorMatterId\>4</MatterSponsorMatterId\>
  <MatterSponsorMatterVersion\>sample string 5</MatterSponsorMatterVersion\>
  <MatterSponsorName\>sample string 6</MatterSponsorName\>
  <MatterSponsorNameId\>1</MatterSponsorNameId\>
  <MatterSponsorRowVersion\>QEA=</MatterSponsorRowVersion\>
  <MatterSponsorSequence\>7</MatterSponsorSequence\>
</GranicusMatterSponsor\>

**Sample:**

({"MatterSponsorId":1,"MatterSponsorGuid":"sample string 2","MatterSponsorLastModifiedUtc":"2024-12-11T18:00:30.3790629-05:00","MatterSponsorRowVersion":"QEA=","MatterSponsorMatterId":4,"MatterSponsorMatterVersion":"sample string 5","MatterSponsorNameId":1,"MatterSponsorBodyId":1,"MatterSponsorName":"sample string 6","MatterSponsorSequence":7,"MatterSponsorLinkFlag":8});

Title: GET v1/{Client}/Matters/{MatterId}/Sponsors

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Matters-MatterId-Sponsors

Markdown Content:
Gets all Matter Sponsors for one Matter record.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| MatterId | The MatterId of the Matter.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusMatterSponsor](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusMatterSponsor)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| MatterSponsorId |  | integer | None.
 |
| MatterSponsorGuid |  | string | None.

 |
| MatterSponsorLastModifiedUtc |  | date | None.

 |
| MatterSponsorRowVersion |  | Collection of byte | None.

 |
| MatterSponsorMatterId |  | integer | Required

 |
| MatterSponsorMatterVersion |  | string | Required

 |
| MatterSponsorNameId |  | integer | None.

 |
| MatterSponsorBodyId |  | integer | None.

 |
| MatterSponsorName |  | string | None.

 |
| MatterSponsorSequence |  | integer | None.

 |
| MatterSponsorLinkFlag |  | integer | None.

 |

### Response Formats

**Sample:**

\[
  {
    "MatterSponsorId": 1,
    "MatterSponsorGuid": "sample string 2",
    "MatterSponsorLastModifiedUtc": "2024-12-11T18:00:29.5364091-05:00",
    "MatterSponsorRowVersion": "QEA=",
    "MatterSponsorMatterId": 4,
    "MatterSponsorMatterVersion": "sample string 5",
    "MatterSponsorNameId": 1,
    "MatterSponsorBodyId": 1,
    "MatterSponsorName": "sample string 6",
    "MatterSponsorSequence": 7,
    "MatterSponsorLinkFlag": 8
  },
  {
    "MatterSponsorId": 1,
    "MatterSponsorGuid": "sample string 2",
    "MatterSponsorLastModifiedUtc": "2024-12-11T18:00:29.5364091-05:00",
    "MatterSponsorRowVersion": "QEA=",
    "MatterSponsorMatterId": 4,
    "MatterSponsorMatterVersion": "sample string 5",
    "MatterSponsorNameId": 1,
    "MatterSponsorBodyId": 1,
    "MatterSponsorName": "sample string 6",
    "MatterSponsorSequence": 7,
    "MatterSponsorLinkFlag": 8
  }
\]

**Sample:**

<ArrayOfGranicusMatterSponsor xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusMatterSponsor\>
    <MatterSponsorBodyId\>1</MatterSponsorBodyId\>
    <MatterSponsorGuid\>sample string 2</MatterSponsorGuid\>
    <MatterSponsorId\>1</MatterSponsorId\>
    <MatterSponsorLastModifiedUtc\>2024-12-11T18:00:29.5364091-05:00</MatterSponsorLastModifiedUtc\>
    <MatterSponsorLinkFlag\>8</MatterSponsorLinkFlag\>
    <MatterSponsorMatterId\>4</MatterSponsorMatterId\>
    <MatterSponsorMatterVersion\>sample string 5</MatterSponsorMatterVersion\>
    <MatterSponsorName\>sample string 6</MatterSponsorName\>
    <MatterSponsorNameId\>1</MatterSponsorNameId\>
    <MatterSponsorRowVersion\>QEA=</MatterSponsorRowVersion\>
    <MatterSponsorSequence\>7</MatterSponsorSequence\>
  </GranicusMatterSponsor\>
  <GranicusMatterSponsor\>
    <MatterSponsorBodyId\>1</MatterSponsorBodyId\>
    <MatterSponsorGuid\>sample string 2</MatterSponsorGuid\>
    <MatterSponsorId\>1</MatterSponsorId\>
    <MatterSponsorLastModifiedUtc\>2024-12-11T18:00:29.5364091-05:00</MatterSponsorLastModifiedUtc\>
    <MatterSponsorLinkFlag\>8</MatterSponsorLinkFlag\>
    <MatterSponsorMatterId\>4</MatterSponsorMatterId\>
    <MatterSponsorMatterVersion\>sample string 5</MatterSponsorMatterVersion\>
    <MatterSponsorName\>sample string 6</MatterSponsorName\>
    <MatterSponsorNameId\>1</MatterSponsorNameId\>
    <MatterSponsorRowVersion\>QEA=</MatterSponsorRowVersion\>
    <MatterSponsorSequence\>7</MatterSponsorSequence\>
  </GranicusMatterSponsor\>
</ArrayOfGranicusMatterSponsor\>

**Sample:**

(\[{"MatterSponsorId":1,"MatterSponsorGuid":"sample string 2","MatterSponsorLastModifiedUtc":"2024-12-11T18:00:29.5364091-05:00","MatterSponsorRowVersion":"QEA=","MatterSponsorMatterId":4,"MatterSponsorMatterVersion":"sample string 5","MatterSponsorNameId":1,"MatterSponsorBodyId":1,"MatterSponsorName":"sample string 6","MatterSponsorSequence":7,"MatterSponsorLinkFlag":8},{"MatterSponsorId":1,"MatterSponsorGuid":"sample string 2","MatterSponsorLastModifiedUtc":"2024-12-11T18:00:29.5364091-05:00","MatterSponsorRowVersion":"QEA=","MatterSponsorMatterId":4,"MatterSponsorMatterVersion":"sample string 5","MatterSponsorNameId":1,"MatterSponsorBodyId":1,"MatterSponsorName":"sample string 6","MatterSponsorSequence":7,"MatterSponsorLinkFlag":8}\]);

Title: GET v1/{Client}/Matters/{MatterId}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Matters-MatterId

Markdown Content:
Gets one Matter.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| MatterId | The Id of the Matter.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

[GranicusMatter](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusMatter)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| MatterId |  | integer | None.
 |
| MatterGuid |  | string | None.

 |
| MatterLastModifiedUtc |  | date | None.

 |
| MatterRowVersion |  | Collection of byte | None.

 |
| MatterFile |  | string | None.

 |
| MatterName |  | string | None.

 |
| MatterTitle |  | string | None.

 |
| MatterTypeId |  | integer | Required

 |
| MatterTypeName |  | string | None.

 |
| MatterStatusId |  | integer | Required

 |
| MatterStatusName |  | string | None.

 |
| MatterBodyId |  | integer | Required

 |
| MatterBodyName |  | string | None.

 |
| MatterIntroDate |  | date | None.

 |
| MatterAgendaDate |  | date | None.

 |
| MatterPassedDate |  | date | None.

 |
| MatterEnactmentDate |  | date | None.

 |
| MatterEnactmentNumber |  | string | None.

 |
| MatterRequester |  | string | None.

 |
| MatterNotes |  | string | None.

 |
| MatterVersion |  | string | None.

 |
| MatterCost |  | decimal number | None.

 |
| MatterText1 |  | string | None.

 |
| MatterText2 |  | string | None.

 |
| MatterText3 |  | string | None.

 |
| MatterText4 |  | string | None.

 |
| MatterText5 |  | string | None.

 |
| MatterDate1 |  | date | None.

 |
| MatterDate2 |  | date | None.

 |
| MatterEXText1 |  | string | None.

 |
| MatterEXText2 |  | string | None.

 |
| MatterEXText3 |  | string | None.

 |
| MatterEXText4 |  | string | None.

 |
| MatterEXText5 |  | string | None.

 |
| MatterEXText6 |  | string | None.

 |
| MatterEXText7 |  | string | None.

 |
| MatterEXText8 |  | string | None.

 |
| MatterEXText9 |  | string | None.

 |
| MatterEXText10 |  | string | None.

 |
| MatterEXText11 |  | string | None.

 |
| MatterEXDate1 |  | date | None.

 |
| MatterEXDate2 |  | date | None.

 |
| MatterEXDate3 |  | date | None.

 |
| MatterEXDate4 |  | date | None.

 |
| MatterEXDate5 |  | date | None.

 |
| MatterEXDate6 |  | date | None.

 |
| MatterEXDate7 |  | date | None.

 |
| MatterEXDate8 |  | date | None.

 |
| MatterEXDate9 |  | date | None.

 |
| MatterEXDate10 |  | date | None.

 |
| MatterAgiloftId |  | integer | None.

 |
| MatterReference |  | string | None.

 |
| MatterRestrictViewViaWeb |  | boolean | None.

 |
| MatterReports |  | Collection of [GranicusMatterReport](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusMatterReport) | None.

 |

### Response Formats

**Sample:**

{
  "MatterId": 1,
  "MatterGuid": "sample string 2",
  "MatterLastModifiedUtc": "2024-12-11T18:00:07.6029994-05:00",
  "MatterRowVersion": "QEA=",
  "MatterFile": "sample string 3",
  "MatterName": "sample string 4",
  "MatterTitle": "sample string 5",
  "MatterTypeId": 6,
  "MatterTypeName": "sample string 7",
  "MatterStatusId": 8,
  "MatterStatusName": "sample string 9",
  "MatterBodyId": 10,
  "MatterBodyName": "sample string 11",
  "MatterIntroDate": "2024-12-11T18:00:07.6029994-05:00",
  "MatterAgendaDate": "2024-12-11T18:00:07.6029994-05:00",
  "MatterPassedDate": "2024-12-11T18:00:07.6029994-05:00",
  "MatterEnactmentDate": "2024-12-11T18:00:07.6029994-05:00",
  "MatterEnactmentNumber": "sample string 12",
  "MatterRequester": "sample string 13",
  "MatterNotes": "sample string 14",
  "MatterVersion": "sample string 15",
  "MatterCost": 1.0,
  "MatterText1": "sample string 16",
  "MatterText2": "sample string 17",
  "MatterText3": "sample string 18",
  "MatterText4": "sample string 19",
  "MatterText5": "sample string 20",
  "MatterDate1": "2024-12-11T18:00:07.6029994-05:00",
  "MatterDate2": "2024-12-11T18:00:07.6029994-05:00",
  "MatterEXText1": "sample string 21",
  "MatterEXText2": "sample string 22",
  "MatterEXText3": "sample string 23",
  "MatterEXText4": "sample string 24",
  "MatterEXText5": "sample string 25",
  "MatterEXText6": "sample string 26",
  "MatterEXText7": "sample string 27",
  "MatterEXText8": "sample string 28",
  "MatterEXText9": "sample string 29",
  "MatterEXText10": "sample string 30",
  "MatterEXText11": "sample string 31",
  "MatterEXDate1": "2024-12-11T18:00:07.6029994-05:00",
  "MatterEXDate2": "2024-12-11T18:00:07.6029994-05:00",
  "MatterEXDate3": "2024-12-11T18:00:07.6029994-05:00",
  "MatterEXDate4": "2024-12-11T18:00:07.6029994-05:00",
  "MatterEXDate5": "2024-12-11T18:00:07.6029994-05:00",
  "MatterEXDate6": "2024-12-11T18:00:07.6029994-05:00",
  "MatterEXDate7": "2024-12-11T18:00:07.6029994-05:00",
  "MatterEXDate8": "2024-12-11T18:00:07.6029994-05:00",
  "MatterEXDate9": "2024-12-11T18:00:07.6029994-05:00",
  "MatterEXDate10": "2024-12-11T18:00:07.6029994-05:00",
  "MatterAgiloftId": 32,
  "MatterReference": "sample string 33",
  "MatterRestrictViewViaWeb": true,
  "MatterReports": \[
    {
      "ReportName": "Legislation Details",
      "ReportURL": "https://example.com/ViewReport.ashx?M=R&N=Master&GID=000&LEGID=0000&Title=Legislation+Details",
      "ReportType": "InSite"
    },
    {
      "ReportName": "Legislation Details",
      "ReportURL": "https://example.com/ViewReport.ashx?M=R&N=Master&GID=000&LEGID=0000&Title=Legislation+Details",
      "ReportType": "InSite"
    }
  \]
}

**Sample:**

<GranicusMatter xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <MatterAgendaDate\>2024-12-11T18:00:07.6029994-05:00</MatterAgendaDate\>
  <MatterAgiloftId\>32</MatterAgiloftId\>
  <MatterBodyId\>10</MatterBodyId\>
  <MatterBodyName\>sample string 11</MatterBodyName\>
  <MatterCost\>1</MatterCost\>
  <MatterDate1\>2024-12-11T18:00:07.6029994-05:00</MatterDate1\>
  <MatterDate2\>2024-12-11T18:00:07.6029994-05:00</MatterDate2\>
  <MatterEXDate1\>2024-12-11T18:00:07.6029994-05:00</MatterEXDate1\>
  <MatterEXDate10\>2024-12-11T18:00:07.6029994-05:00</MatterEXDate10\>
  <MatterEXDate2\>2024-12-11T18:00:07.6029994-05:00</MatterEXDate2\>
  <MatterEXDate3\>2024-12-11T18:00:07.6029994-05:00</MatterEXDate3\>
  <MatterEXDate4\>2024-12-11T18:00:07.6029994-05:00</MatterEXDate4\>
  <MatterEXDate5\>2024-12-11T18:00:07.6029994-05:00</MatterEXDate5\>
  <MatterEXDate6\>2024-12-11T18:00:07.6029994-05:00</MatterEXDate6\>
  <MatterEXDate7\>2024-12-11T18:00:07.6029994-05:00</MatterEXDate7\>
  <MatterEXDate8\>2024-12-11T18:00:07.6029994-05:00</MatterEXDate8\>
  <MatterEXDate9\>2024-12-11T18:00:07.6029994-05:00</MatterEXDate9\>
  <MatterEXText1\>sample string 21</MatterEXText1\>
  <MatterEXText10\>sample string 30</MatterEXText10\>
  <MatterEXText11\>sample string 31</MatterEXText11\>
  <MatterEXText2\>sample string 22</MatterEXText2\>
  <MatterEXText3\>sample string 23</MatterEXText3\>
  <MatterEXText4\>sample string 24</MatterEXText4\>
  <MatterEXText5\>sample string 25</MatterEXText5\>
  <MatterEXText6\>sample string 26</MatterEXText6\>
  <MatterEXText7\>sample string 27</MatterEXText7\>
  <MatterEXText8\>sample string 28</MatterEXText8\>
  <MatterEXText9\>sample string 29</MatterEXText9\>
  <MatterEnactmentDate\>2024-12-11T18:00:07.6029994-05:00</MatterEnactmentDate\>
  <MatterEnactmentNumber\>sample string 12</MatterEnactmentNumber\>
  <MatterFile\>sample string 3</MatterFile\>
  <MatterGuid\>sample string 2</MatterGuid\>
  <MatterId\>1</MatterId\>
  <MatterIntroDate\>2024-12-11T18:00:07.6029994-05:00</MatterIntroDate\>
  <MatterLastModifiedUtc\>2024-12-11T18:00:07.6029994-05:00</MatterLastModifiedUtc\>
  <MatterName\>sample string 4</MatterName\>
  <MatterNotes\>sample string 14</MatterNotes\>
  <MatterPassedDate\>2024-12-11T18:00:07.6029994-05:00</MatterPassedDate\>
  <MatterReference\>sample string 33</MatterReference\>
  <MatterReports\>
    <GranicusMatterReport\>
      <ReportName\>Legislation Details</ReportName\>
      <ReportType\>InSite</ReportType\>
      <ReportURL\>https://example.com/ViewReport.ashx?M=R&amp;N=Master&amp;GID=000&amp;LEGID=0000&amp;Title=Legislation+Details</ReportURL\>
    </GranicusMatterReport\>
    <GranicusMatterReport\>
      <ReportName\>Legislation Details</ReportName\>
      <ReportType\>InSite</ReportType\>
      <ReportURL\>https://example.com/ViewReport.ashx?M=R&amp;N=Master&amp;GID=000&amp;LEGID=0000&amp;Title=Legislation+Details</ReportURL\>
    </GranicusMatterReport\>
  </MatterReports\>
  <MatterRequester\>sample string 13</MatterRequester\>
  <MatterRestrictViewViaWeb\>true</MatterRestrictViewViaWeb\>
  <MatterRowVersion\>QEA=</MatterRowVersion\>
  <MatterStatusId\>8</MatterStatusId\>
  <MatterStatusName\>sample string 9</MatterStatusName\>
  <MatterText1\>sample string 16</MatterText1\>
  <MatterText2\>sample string 17</MatterText2\>
  <MatterText3\>sample string 18</MatterText3\>
  <MatterText4\>sample string 19</MatterText4\>
  <MatterText5\>sample string 20</MatterText5\>
  <MatterTitle\>sample string 5</MatterTitle\>
  <MatterTypeId\>6</MatterTypeId\>
  <MatterTypeName\>sample string 7</MatterTypeName\>
  <MatterVersion\>sample string 15</MatterVersion\>
</GranicusMatter\>

**Sample:**

({"MatterId":1,"MatterGuid":"sample string 2","MatterLastModifiedUtc":"2024-12-11T18:00:07.6029994-05:00","MatterRowVersion":"QEA=","MatterFile":"sample string 3","MatterName":"sample string 4","MatterTitle":"sample string 5","MatterTypeId":6,"MatterTypeName":"sample string 7","MatterStatusId":8,"MatterStatusName":"sample string 9","MatterBodyId":10,"MatterBodyName":"sample string 11","MatterIntroDate":"2024-12-11T18:00:07.6029994-05:00","MatterAgendaDate":"2024-12-11T18:00:07.6029994-05:00","MatterPassedDate":"2024-12-11T18:00:07.6029994-05:00","MatterEnactmentDate":"2024-12-11T18:00:07.6029994-05:00","MatterEnactmentNumber":"sample string 12","MatterRequester":"sample string 13","MatterNotes":"sample string 14","MatterVersion":"sample string 15","MatterCost":1.0,"MatterText1":"sample string 16","MatterText2":"sample string 17","MatterText3":"sample string 18","MatterText4":"sample string 19","MatterText5":"sample string 20","MatterDate1":"2024-12-11T18:00:07.6029994-05:00","MatterDate2":"2024-12-11T18:00:07.6029994-05:00","MatterEXText1":"sample string 21","MatterEXText2":"sample string 22","MatterEXText3":"sample string 23","MatterEXText4":"sample string 24","MatterEXText5":"sample string 25","MatterEXText6":"sample string 26","MatterEXText7":"sample string 27","MatterEXText8":"sample string 28","MatterEXText9":"sample string 29","MatterEXText10":"sample string 30","MatterEXText11":"sample string 31","MatterEXDate1":"2024-12-11T18:00:07.6029994-05:00","MatterEXDate2":"2024-12-11T18:00:07.6029994-05:00","MatterEXDate3":"2024-12-11T18:00:07.6029994-05:00","MatterEXDate4":"2024-12-11T18:00:07.6029994-05:00","MatterEXDate5":"2024-12-11T18:00:07.6029994-05:00","MatterEXDate6":"2024-12-11T18:00:07.6029994-05:00","MatterEXDate7":"2024-12-11T18:00:07.6029994-05:00","MatterEXDate8":"2024-12-11T18:00:07.6029994-05:00","MatterEXDate9":"2024-12-11T18:00:07.6029994-05:00","MatterEXDate10":"2024-12-11T18:00:07.6029994-05:00","MatterAgiloftId":32,"MatterReference":"sample string 33","MatterRestrictViewViaWeb":true,"MatterReports":\[{"ReportName":"Legislation Details","ReportURL":"https://example.com/ViewReport.ashx?M=R&N=Master&GID=000&LEGID=0000&Title=Legislation+Details","ReportType":"InSite"},{"ReportName":"Legislation Details","ReportURL":"https://example.com/ViewReport.ashx?M=R&N=Master&GID=000&LEGID=0000&Title=Legislation+Details","ReportType":"InSite"}\]});

Title: GET v1/{Client}/Matters

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Matters

Markdown Content:
Gets all Matters.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusMatter](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusMatter)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| MatterId |  | integer | None.
 |
| MatterGuid |  | string | None.

 |
| MatterLastModifiedUtc |  | date | None.

 |
| MatterRowVersion |  | Collection of byte | None.

 |
| MatterFile |  | string | None.

 |
| MatterName |  | string | None.

 |
| MatterTitle |  | string | None.

 |
| MatterTypeId |  | integer | Required

 |
| MatterTypeName |  | string | None.

 |
| MatterStatusId |  | integer | Required

 |
| MatterStatusName |  | string | None.

 |
| MatterBodyId |  | integer | Required

 |
| MatterBodyName |  | string | None.

 |
| MatterIntroDate |  | date | None.

 |
| MatterAgendaDate |  | date | None.

 |
| MatterPassedDate |  | date | None.

 |
| MatterEnactmentDate |  | date | None.

 |
| MatterEnactmentNumber |  | string | None.

 |
| MatterRequester |  | string | None.

 |
| MatterNotes |  | string | None.

 |
| MatterVersion |  | string | None.

 |
| MatterCost |  | decimal number | None.

 |
| MatterText1 |  | string | None.

 |
| MatterText2 |  | string | None.

 |
| MatterText3 |  | string | None.

 |
| MatterText4 |  | string | None.

 |
| MatterText5 |  | string | None.

 |
| MatterDate1 |  | date | None.

 |
| MatterDate2 |  | date | None.

 |
| MatterEXText1 |  | string | None.

 |
| MatterEXText2 |  | string | None.

 |
| MatterEXText3 |  | string | None.

 |
| MatterEXText4 |  | string | None.

 |
| MatterEXText5 |  | string | None.

 |
| MatterEXText6 |  | string | None.

 |
| MatterEXText7 |  | string | None.

 |
| MatterEXText8 |  | string | None.

 |
| MatterEXText9 |  | string | None.

 |
| MatterEXText10 |  | string | None.

 |
| MatterEXText11 |  | string | None.

 |
| MatterEXDate1 |  | date | None.

 |
| MatterEXDate2 |  | date | None.

 |
| MatterEXDate3 |  | date | None.

 |
| MatterEXDate4 |  | date | None.

 |
| MatterEXDate5 |  | date | None.

 |
| MatterEXDate6 |  | date | None.

 |
| MatterEXDate7 |  | date | None.

 |
| MatterEXDate8 |  | date | None.

 |
| MatterEXDate9 |  | date | None.

 |
| MatterEXDate10 |  | date | None.

 |
| MatterAgiloftId |  | integer | None.

 |
| MatterReference |  | string | None.

 |
| MatterRestrictViewViaWeb |  | boolean | None.

 |
| MatterReports |  | Collection of [GranicusMatterReport](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusMatterReport) | None.

 |

### Response Formats

**Sample:**

\[
  {
    "MatterId": 1,
    "MatterGuid": "sample string 2",
    "MatterLastModifiedUtc": "2024-12-11T17:59:56.6116693-05:00",
    "MatterRowVersion": "QEA=",
    "MatterFile": "sample string 3",
    "MatterName": "sample string 4",
    "MatterTitle": "sample string 5",
    "MatterTypeId": 6,
    "MatterTypeName": "sample string 7",
    "MatterStatusId": 8,
    "MatterStatusName": "sample string 9",
    "MatterBodyId": 10,
    "MatterBodyName": "sample string 11",
    "MatterIntroDate": "2024-12-11T17:59:56.6116693-05:00",
    "MatterAgendaDate": "2024-12-11T17:59:56.6116693-05:00",
    "MatterPassedDate": "2024-12-11T17:59:56.6116693-05:00",
    "MatterEnactmentDate": "2024-12-11T17:59:56.6116693-05:00",
    "MatterEnactmentNumber": "sample string 12",
    "MatterRequester": "sample string 13",
    "MatterNotes": "sample string 14",
    "MatterVersion": "sample string 15",
    "MatterCost": 1.0,
    "MatterText1": "sample string 16",
    "MatterText2": "sample string 17",
    "MatterText3": "sample string 18",
    "MatterText4": "sample string 19",
    "MatterText5": "sample string 20",
    "MatterDate1": "2024-12-11T17:59:56.6131644-05:00",
    "MatterDate2": "2024-12-11T17:59:56.6131644-05:00",
    "MatterEXText1": "sample string 21",
    "MatterEXText2": "sample string 22",
    "MatterEXText3": "sample string 23",
    "MatterEXText4": "sample string 24",
    "MatterEXText5": "sample string 25",
    "MatterEXText6": "sample string 26",
    "MatterEXText7": "sample string 27",
    "MatterEXText8": "sample string 28",
    "MatterEXText9": "sample string 29",
    "MatterEXText10": "sample string 30",
    "MatterEXText11": "sample string 31",
    "MatterEXDate1": "2024-12-11T17:59:56.6132404-05:00",
    "MatterEXDate2": "2024-12-11T17:59:56.6132404-05:00",
    "MatterEXDate3": "2024-12-11T17:59:56.6132404-05:00",
    "MatterEXDate4": "2024-12-11T17:59:56.6132404-05:00",
    "MatterEXDate5": "2024-12-11T17:59:56.6132404-05:00",
    "MatterEXDate6": "2024-12-11T17:59:56.6137618-05:00",
    "MatterEXDate7": "2024-12-11T17:59:56.6137618-05:00",
    "MatterEXDate8": "2024-12-11T17:59:56.6137618-05:00",
    "MatterEXDate9": "2024-12-11T17:59:56.6137618-05:00",
    "MatterEXDate10": "2024-12-11T17:59:56.6137618-05:00",
    "MatterAgiloftId": 32,
    "MatterReference": "sample string 33",
    "MatterRestrictViewViaWeb": true,
    "MatterReports": \[
      {
        "ReportName": "Legislation Details",
        "ReportURL": "https://example.com/ViewReport.ashx?M=R&N=Master&GID=000&LEGID=0000&Title=Legislation+Details",
        "ReportType": "InSite"
      },
      {
        "ReportName": "Legislation Details",
        "ReportURL": "https://example.com/ViewReport.ashx?M=R&N=Master&GID=000&LEGID=0000&Title=Legislation+Details",
        "ReportType": "InSite"
      }
    \]
  },
  {
    "MatterId": 1,
    "MatterGuid": "sample string 2",
    "MatterLastModifiedUtc": "2024-12-11T17:59:56.6116693-05:00",
    "MatterRowVersion": "QEA=",
    "MatterFile": "sample string 3",
    "MatterName": "sample string 4",
    "MatterTitle": "sample string 5",
    "MatterTypeId": 6,
    "MatterTypeName": "sample string 7",
    "MatterStatusId": 8,
    "MatterStatusName": "sample string 9",
    "MatterBodyId": 10,
    "MatterBodyName": "sample string 11",
    "MatterIntroDate": "2024-12-11T17:59:56.6116693-05:00",
    "MatterAgendaDate": "2024-12-11T17:59:56.6116693-05:00",
    "MatterPassedDate": "2024-12-11T17:59:56.6116693-05:00",
    "MatterEnactmentDate": "2024-12-11T17:59:56.6116693-05:00",
    "MatterEnactmentNumber": "sample string 12",
    "MatterRequester": "sample string 13",
    "MatterNotes": "sample string 14",
    "MatterVersion": "sample string 15",
    "MatterCost": 1.0,
    "MatterText1": "sample string 16",
    "MatterText2": "sample string 17",
    "MatterText3": "sample string 18",
    "MatterText4": "sample string 19",
    "MatterText5": "sample string 20",
    "MatterDate1": "2024-12-11T17:59:56.6131644-05:00",
    "MatterDate2": "2024-12-11T17:59:56.6131644-05:00",
    "MatterEXText1": "sample string 21",
    "MatterEXText2": "sample string 22",
    "MatterEXText3": "sample string 23",
    "MatterEXText4": "sample string 24",
    "MatterEXText5": "sample string 25",
    "MatterEXText6": "sample string 26",
    "MatterEXText7": "sample string 27",
    "MatterEXText8": "sample string 28",
    "MatterEXText9": "sample string 29",
    "MatterEXText10": "sample string 30",
    "MatterEXText11": "sample string 31",
    "MatterEXDate1": "2024-12-11T17:59:56.6132404-05:00",
    "MatterEXDate2": "2024-12-11T17:59:56.6132404-05:00",
    "MatterEXDate3": "2024-12-11T17:59:56.6132404-05:00",
    "MatterEXDate4": "2024-12-11T17:59:56.6132404-05:00",
    "MatterEXDate5": "2024-12-11T17:59:56.6132404-05:00",
    "MatterEXDate6": "2024-12-11T17:59:56.6137618-05:00",
    "MatterEXDate7": "2024-12-11T17:59:56.6137618-05:00",
    "MatterEXDate8": "2024-12-11T17:59:56.6137618-05:00",
    "MatterEXDate9": "2024-12-11T17:59:56.6137618-05:00",
    "MatterEXDate10": "2024-12-11T17:59:56.6137618-05:00",
    "MatterAgiloftId": 32,
    "MatterReference": "sample string 33",
    "MatterRestrictViewViaWeb": true,
    "MatterReports": \[
      {
        "ReportName": "Legislation Details",
        "ReportURL": "https://example.com/ViewReport.ashx?M=R&N=Master&GID=000&LEGID=0000&Title=Legislation+Details",
        "ReportType": "InSite"
      },
      {
        "ReportName": "Legislation Details",
        "ReportURL": "https://example.com/ViewReport.ashx?M=R&N=Master&GID=000&LEGID=0000&Title=Legislation+Details",
        "ReportType": "InSite"
      }
    \]
  }
\]

**Sample:**

<ArrayOfGranicusMatter xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusMatter\>
    <MatterAgendaDate\>2024-12-11T17:59:56.6116693-05:00</MatterAgendaDate\>
    <MatterAgiloftId\>32</MatterAgiloftId\>
    <MatterBodyId\>10</MatterBodyId\>
    <MatterBodyName\>sample string 11</MatterBodyName\>
    <MatterCost\>1</MatterCost\>
    <MatterDate1\>2024-12-11T17:59:56.6131644-05:00</MatterDate1\>
    <MatterDate2\>2024-12-11T17:59:56.6131644-05:00</MatterDate2\>
    <MatterEXDate1\>2024-12-11T17:59:56.6132404-05:00</MatterEXDate1\>
    <MatterEXDate10\>2024-12-11T17:59:56.6137618-05:00</MatterEXDate10\>
    <MatterEXDate2\>2024-12-11T17:59:56.6132404-05:00</MatterEXDate2\>
    <MatterEXDate3\>2024-12-11T17:59:56.6132404-05:00</MatterEXDate3\>
    <MatterEXDate4\>2024-12-11T17:59:56.6132404-05:00</MatterEXDate4\>
    <MatterEXDate5\>2024-12-11T17:59:56.6132404-05:00</MatterEXDate5\>
    <MatterEXDate6\>2024-12-11T17:59:56.6137618-05:00</MatterEXDate6\>
    <MatterEXDate7\>2024-12-11T17:59:56.6137618-05:00</MatterEXDate7\>
    <MatterEXDate8\>2024-12-11T17:59:56.6137618-05:00</MatterEXDate8\>
    <MatterEXDate9\>2024-12-11T17:59:56.6137618-05:00</MatterEXDate9\>
    <MatterEXText1\>sample string 21</MatterEXText1\>
    <MatterEXText10\>sample string 30</MatterEXText10\>
    <MatterEXText11\>sample string 31</MatterEXText11\>
    <MatterEXText2\>sample string 22</MatterEXText2\>
    <MatterEXText3\>sample string 23</MatterEXText3\>
    <MatterEXText4\>sample string 24</MatterEXText4\>
    <MatterEXText5\>sample string 25</MatterEXText5\>
    <MatterEXText6\>sample string 26</MatterEXText6\>
    <MatterEXText7\>sample string 27</MatterEXText7\>
    <MatterEXText8\>sample string 28</MatterEXText8\>
    <MatterEXText9\>sample string 29</MatterEXText9\>
    <MatterEnactmentDate\>2024-12-11T17:59:56.6116693-05:00</MatterEnactmentDate\>
    <MatterEnactmentNumber\>sample string 12</MatterEnactmentNumber\>
    <MatterFile\>sample string 3</MatterFile\>
    <MatterGuid\>sample string 2</MatterGuid\>
    <MatterId\>1</MatterId\>
    <MatterIntroDate\>2024-12-11T17:59:56.6116693-05:00</MatterIntroDate\>
    <MatterLastModifiedUtc\>2024-12-11T17:59:56.6116693-05:00</MatterLastModifiedUtc\>
    <MatterName\>sample string 4</MatterName\>
    <MatterNotes\>sample string 14</MatterNotes\>
    <MatterPassedDate\>2024-12-11T17:59:56.6116693-05:00</MatterPassedDate\>
    <MatterReference\>sample string 33</MatterReference\>
    <MatterReports\>
      <GranicusMatterReport\>
        <ReportName\>Legislation Details</ReportName\>
        <ReportType\>InSite</ReportType\>
        <ReportURL\>https://example.com/ViewReport.ashx?M=R&amp;N=Master&amp;GID=000&amp;LEGID=0000&amp;Title=Legislation+Details</ReportURL\>
      </GranicusMatterReport\>
      <GranicusMatterReport\>
        <ReportName\>Legislation Details</ReportName\>
        <ReportType\>InSite</ReportType\>
        <ReportURL\>https://example.com/ViewReport.ashx?M=R&amp;N=Master&amp;GID=000&amp;LEGID=0000&amp;Title=Legislation+Details</ReportURL\>
      </GranicusMatterReport\>
    </MatterReports\>
    <MatterRequester\>sample string 13</MatterRequester\>
    <MatterRestrictViewViaWeb\>true</MatterRestrictViewViaWeb\>
    <MatterRowVersion\>QEA=</MatterRowVersion\>
    <MatterStatusId\>8</MatterStatusId\>
    <MatterStatusName\>sample string 9</MatterStatusName\>
    <MatterText1\>sample string 16</MatterText1\>
    <MatterText2\>sample string 17</MatterText2\>
    <MatterText3\>sample string 18</MatterText3\>
    <MatterText4\>sample string 19</MatterText4\>
    <MatterText5\>sample string 20</MatterText5\>
    <MatterTitle\>sample string 5</MatterTitle\>
    <MatterTypeId\>6</MatterTypeId\>
    <MatterTypeName\>sample string 7</MatterTypeName\>
    <MatterVersion\>sample string 15</MatterVersion\>
  </GranicusMatter\>
  <GranicusMatter\>
    <MatterAgendaDate\>2024-12-11T17:59:56.6116693-05:00</MatterAgendaDate\>
    <MatterAgiloftId\>32</MatterAgiloftId\>
    <MatterBodyId\>10</MatterBodyId\>
    <MatterBodyName\>sample string 11</MatterBodyName\>
    <MatterCost\>1</MatterCost\>
    <MatterDate1\>2024-12-11T17:59:56.6131644-05:00</MatterDate1\>
    <MatterDate2\>2024-12-11T17:59:56.6131644-05:00</MatterDate2\>
    <MatterEXDate1\>2024-12-11T17:59:56.6132404-05:00</MatterEXDate1\>
    <MatterEXDate10\>2024-12-11T17:59:56.6137618-05:00</MatterEXDate10\>
    <MatterEXDate2\>2024-12-11T17:59:56.6132404-05:00</MatterEXDate2\>
    <MatterEXDate3\>2024-12-11T17:59:56.6132404-05:00</MatterEXDate3\>
    <MatterEXDate4\>2024-12-11T17:59:56.6132404-05:00</MatterEXDate4\>
    <MatterEXDate5\>2024-12-11T17:59:56.6132404-05:00</MatterEXDate5\>
    <MatterEXDate6\>2024-12-11T17:59:56.6137618-05:00</MatterEXDate6\>
    <MatterEXDate7\>2024-12-11T17:59:56.6137618-05:00</MatterEXDate7\>
    <MatterEXDate8\>2024-12-11T17:59:56.6137618-05:00</MatterEXDate8\>
    <MatterEXDate9\>2024-12-11T17:59:56.6137618-05:00</MatterEXDate9\>
    <MatterEXText1\>sample string 21</MatterEXText1\>
    <MatterEXText10\>sample string 30</MatterEXText10\>
    <MatterEXText11\>sample string 31</MatterEXText11\>
    <MatterEXText2\>sample string 22</MatterEXText2\>
    <MatterEXText3\>sample string 23</MatterEXText3\>
    <MatterEXText4\>sample string 24</MatterEXText4\>
    <MatterEXText5\>sample string 25</MatterEXText5\>
    <MatterEXText6\>sample string 26</MatterEXText6\>
    <MatterEXText7\>sample string 27</MatterEXText7\>
    <MatterEXText8\>sample string 28</MatterEXText8\>
    <MatterEXText9\>sample string 29</MatterEXText9\>
    <MatterEnactmentDate\>2024-12-11T17:59:56.6116693-05:00</MatterEnactmentDate\>
    <MatterEnactmentNumber\>sample string 12</MatterEnactmentNumber\>
    <MatterFile\>sample string 3</MatterFile\>
    <MatterGuid\>sample string 2</MatterGuid\>
    <MatterId\>1</MatterId\>
    <MatterIntroDate\>2024-12-11T17:59:56.6116693-05:00</MatterIntroDate\>
    <MatterLastModifiedUtc\>2024-12-11T17:59:56.6116693-05:00</MatterLastModifiedUtc\>
    <MatterName\>sample string 4</MatterName\>
    <MatterNotes\>sample string 14</MatterNotes\>
    <MatterPassedDate\>2024-12-11T17:59:56.6116693-05:00</MatterPassedDate\>
    <MatterReference\>sample string 33</MatterReference\>
    <MatterReports\>
      <GranicusMatterReport\>
        <ReportName\>Legislation Details</ReportName\>
        <ReportType\>InSite</ReportType\>
        <ReportURL\>https://example.com/ViewReport.ashx?M=R&amp;N=Master&amp;GID=000&amp;LEGID=0000&amp;Title=Legislation+Details</ReportURL\>
      </GranicusMatterReport\>
      <GranicusMatterReport\>
        <ReportName\>Legislation Details</ReportName\>
        <ReportType\>InSite</ReportType\>
        <ReportURL\>https://example.com/ViewReport.ashx?M=R&amp;N=Master&amp;GID=000&amp;LEGID=0000&amp;Title=Legislation+Details</ReportURL\>
      </GranicusMatterReport\>
    </MatterReports\>
    <MatterRequester\>sample string 13</MatterRequester\>
    <MatterRestrictViewViaWeb\>true</MatterRestrictViewViaWeb\>
    <MatterRowVersion\>QEA=</MatterRowVersion\>
    <MatterStatusId\>8</MatterStatusId\>
    <MatterStatusName\>sample string 9</MatterStatusName\>
    <MatterText1\>sample string 16</MatterText1\>
    <MatterText2\>sample string 17</MatterText2\>
    <MatterText3\>sample string 18</MatterText3\>
    <MatterText4\>sample string 19</MatterText4\>
    <MatterText5\>sample string 20</MatterText5\>
    <MatterTitle\>sample string 5</MatterTitle\>
    <MatterTypeId\>6</MatterTypeId\>
    <MatterTypeName\>sample string 7</MatterTypeName\>
    <MatterVersion\>sample string 15</MatterVersion\>
  </GranicusMatter\>
</ArrayOfGranicusMatter\>

**Sample:**

(\[{"MatterId":1,"MatterGuid":"sample string 2","MatterLastModifiedUtc":"2024-12-11T17:59:56.6116693-05:00","MatterRowVersion":"QEA=","MatterFile":"sample string 3","MatterName":"sample string 4","MatterTitle":"sample string 5","MatterTypeId":6,"MatterTypeName":"sample string 7","MatterStatusId":8,"MatterStatusName":"sample string 9","MatterBodyId":10,"MatterBodyName":"sample string 11","MatterIntroDate":"2024-12-11T17:59:56.6116693-05:00","MatterAgendaDate":"2024-12-11T17:59:56.6116693-05:00","MatterPassedDate":"2024-12-11T17:59:56.6116693-05:00","MatterEnactmentDate":"2024-12-11T17:59:56.6116693-05:00","MatterEnactmentNumber":"sample string 12","MatterRequester":"sample string 13","MatterNotes":"sample string 14","MatterVersion":"sample string 15","MatterCost":1.0,"MatterText1":"sample string 16","MatterText2":"sample string 17","MatterText3":"sample string 18","MatterText4":"sample string 19","MatterText5":"sample string 20","MatterDate1":"2024-12-11T17:59:56.6131644-05:00","MatterDate2":"2024-12-11T17:59:56.6131644-05:00","MatterEXText1":"sample string 21","MatterEXText2":"sample string 22","MatterEXText3":"sample string 23","MatterEXText4":"sample string 24","MatterEXText5":"sample string 25","MatterEXText6":"sample string 26","MatterEXText7":"sample string 27","MatterEXText8":"sample string 28","MatterEXText9":"sample string 29","MatterEXText10":"sample string 30","MatterEXText11":"sample string 31","MatterEXDate1":"2024-12-11T17:59:56.6132404-05:00","MatterEXDate2":"2024-12-11T17:59:56.6132404-05:00","MatterEXDate3":"2024-12-11T17:59:56.6132404-05:00","MatterEXDate4":"2024-12-11T17:59:56.6132404-05:00","MatterEXDate5":"2024-12-11T17:59:56.6132404-05:00","MatterEXDate6":"2024-12-11T17:59:56.6137618-05:00","MatterEXDate7":"2024-12-11T17:59:56.6137618-05:00","MatterEXDate8":"2024-12-11T17:59:56.6137618-05:00","MatterEXDate9":"2024-12-11T17:59:56.6137618-05:00","MatterEXDate10":"2024-12-11T17:59:56.6137618-05:00","MatterAgiloftId":32,"MatterReference":"sample string 33","MatterRestrictViewViaWeb":true,"MatterReports":\[{"ReportName":"Legislation Details","ReportURL":"https://example.com/ViewReport.ashx?M=R&N=Master&GID=000&LEGID=0000&Title=Legislation+Details","ReportType":"InSite"},{"ReportName":"Legislation Details","ReportURL":"https://example.com/ViewReport.ashx?M=R&N=Master&GID=000&LEGID=0000&Title=Legislation+Details","ReportType":"InSite"}\]},{"MatterId":1,"MatterGuid":"sample string 2","MatterLastModifiedUtc":"2024-12-11T17:59:56.6116693-05:00","MatterRowVersion":"QEA=","MatterFile":"sample string 3","MatterName":"sample string 4","MatterTitle":"sample string 5","MatterTypeId":6,"MatterTypeName":"sample string 7","MatterStatusId":8,"MatterStatusName":"sample string 9","MatterBodyId":10,"MatterBodyName":"sample string 11","MatterIntroDate":"2024-12-11T17:59:56.6116693-05:00","MatterAgendaDate":"2024-12-11T17:59:56.6116693-05:00","MatterPassedDate":"2024-12-11T17:59:56.6116693-05:00","MatterEnactmentDate":"2024-12-11T17:59:56.6116693-05:00","MatterEnactmentNumber":"sample string 12","MatterRequester":"sample string 13","MatterNotes":"sample string 14","MatterVersion":"sample string 15","MatterCost":1.0,"MatterText1":"sample string 16","MatterText2":"sample string 17","MatterText3":"sample string 18","MatterText4":"sample string 19","MatterText5":"sample string 20","MatterDate1":"2024-12-11T17:59:56.6131644-05:00","MatterDate2":"2024-12-11T17:59:56.6131644-05:00","MatterEXText1":"sample string 21","MatterEXText2":"sample string 22","MatterEXText3":"sample string 23","MatterEXText4":"sample string 24","MatterEXText5":"sample string 25","MatterEXText6":"sample string 26","MatterEXText7":"sample string 27","MatterEXText8":"sample string 28","MatterEXText9":"sample string 29","MatterEXText10":"sample string 30","MatterEXText11":"sample string 31","MatterEXDate1":"2024-12-11T17:59:56.6132404-05:00","MatterEXDate2":"2024-12-11T17:59:56.6132404-05:00","MatterEXDate3":"2024-12-11T17:59:56.6132404-05:00","MatterEXDate4":"2024-12-11T17:59:56.6132404-05:00","MatterEXDate5":"2024-12-11T17:59:56.6132404-05:00","MatterEXDate6":"2024-12-11T17:59:56.6137618-05:00","MatterEXDate7":"2024-12-11T17:59:56.6137618-05:00","MatterEXDate8":"2024-12-11T17:59:56.6137618-05:00","MatterEXDate9":"2024-12-11T17:59:56.6137618-05:00","MatterEXDate10":"2024-12-11T17:59:56.6137618-05:00","MatterAgiloftId":32,"MatterReference":"sample string 33","MatterRestrictViewViaWeb":true,"MatterReports":\[{"ReportName":"Legislation Details","ReportURL":"https://example.com/ViewReport.ashx?M=R&N=Master&GID=000&LEGID=0000&Title=Legislation+Details","ReportType":"InSite"},{"ReportName":"Legislation Details","ReportURL":"https://example.com/ViewReport.ashx?M=R&N=Master&GID=000&LEGID=0000&Title=Legislation+Details","ReportType":"InSite"}\]}\]);

Title: GET v1/{Client}/MatterRequesters

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-MatterRequesters

Markdown Content:
Gets all Matter Requesters.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusMatterRequester](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusMatterRequester)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| MatterRequesterName |  | string | None.
 |

### Response Formats

**Sample:**

\[
  {
    "MatterRequesterName": "sample string 1"
  },
  {
    "MatterRequesterName": "sample string 1"
  }
\]

**Sample:**

<ArrayOfGranicusMatterRequester xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusMatterRequester\>
    <MatterRequesterName\>sample string 1</MatterRequesterName\>
  </GranicusMatterRequester\>
  <GranicusMatterRequester\>
    <MatterRequesterName\>sample string 1</MatterRequesterName\>
  </GranicusMatterRequester\>
</ArrayOfGranicusMatterRequester\>

**Sample:**

(\[{"MatterRequesterName":"sample string 1"},{"MatterRequesterName":"sample string 1"}\]);

Title: GET v1/{Client}/Matters/{MatterId}/Relations/{MatterRelationId}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Matters-MatterId-Relations-MatterRelationId

Markdown Content:
Gets one Matter Relation.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| MatterId |  | integer | Required

 |
| MatterRelationId | The MatterRelationId of the Matter Relation.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

[GranicusMatterRelation](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusMatterRelation)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| MatterRelationId |  | integer | None.
 |
| MatterRelationGuid |  | string | None.

 |
| MatterRelationLastModifiedUtc |  | date | None.

 |
| MatterRelationRowVersion |  | Collection of byte | None.

 |
| MatterRelationMatterId |  | integer | Required

 |
| MatterRelationFlag |  | integer | None.

 |

### Response Formats

**Sample:**

{
  "MatterRelationId": 1,
  "MatterRelationGuid": "sample string 2",
  "MatterRelationLastModifiedUtc": "2024-12-11T17:59:35.5588317-05:00",
  "MatterRelationRowVersion": "QEA=",
  "MatterRelationMatterId": 3,
  "MatterRelationFlag": 4
}

**Sample:**

<GranicusMatterRelation xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <MatterRelationFlag\>4</MatterRelationFlag\>
  <MatterRelationGuid\>sample string 2</MatterRelationGuid\>
  <MatterRelationId\>1</MatterRelationId\>
  <MatterRelationLastModifiedUtc\>2024-12-11T17:59:35.5588317-05:00</MatterRelationLastModifiedUtc\>
  <MatterRelationMatterId\>3</MatterRelationMatterId\>
  <MatterRelationRowVersion\>QEA=</MatterRelationRowVersion\>
</GranicusMatterRelation\>

**Sample:**

({"MatterRelationId":1,"MatterRelationGuid":"sample string 2","MatterRelationLastModifiedUtc":"2024-12-11T17:59:35.5588317-05:00","MatterRelationRowVersion":"QEA=","MatterRelationMatterId":3,"MatterRelationFlag":4});

Title: GET v1/{Client}/Matters/{MatterId}/Relations

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Matters-MatterId-Relations

Markdown Content:
Gets all Matter Relations for one Matter record.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| MatterId | The MatterId of the Matter.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusMatterRelation](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusMatterRelation)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| MatterRelationId |  | integer | None.
 |
| MatterRelationGuid |  | string | None.

 |
| MatterRelationLastModifiedUtc |  | date | None.

 |
| MatterRelationRowVersion |  | Collection of byte | None.

 |
| MatterRelationMatterId |  | integer | Required

 |
| MatterRelationFlag |  | integer | None.

 |

### Response Formats

**Sample:**

\[
  {
    "MatterRelationId": 1,
    "MatterRelationGuid": "sample string 2",
    "MatterRelationLastModifiedUtc": "2024-12-11T17:59:26.0653012-05:00",
    "MatterRelationRowVersion": "QEA=",
    "MatterRelationMatterId": 3,
    "MatterRelationFlag": 4
  },
  {
    "MatterRelationId": 1,
    "MatterRelationGuid": "sample string 2",
    "MatterRelationLastModifiedUtc": "2024-12-11T17:59:26.0653012-05:00",
    "MatterRelationRowVersion": "QEA=",
    "MatterRelationMatterId": 3,
    "MatterRelationFlag": 4
  }
\]

**Sample:**

<ArrayOfGranicusMatterRelation xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusMatterRelation\>
    <MatterRelationFlag\>4</MatterRelationFlag\>
    <MatterRelationGuid\>sample string 2</MatterRelationGuid\>
    <MatterRelationId\>1</MatterRelationId\>
    <MatterRelationLastModifiedUtc\>2024-12-11T17:59:26.0653012-05:00</MatterRelationLastModifiedUtc\>
    <MatterRelationMatterId\>3</MatterRelationMatterId\>
    <MatterRelationRowVersion\>QEA=</MatterRelationRowVersion\>
  </GranicusMatterRelation\>
  <GranicusMatterRelation\>
    <MatterRelationFlag\>4</MatterRelationFlag\>
    <MatterRelationGuid\>sample string 2</MatterRelationGuid\>
    <MatterRelationId\>1</MatterRelationId\>
    <MatterRelationLastModifiedUtc\>2024-12-11T17:59:26.0653012-05:00</MatterRelationLastModifiedUtc\>
    <MatterRelationMatterId\>3</MatterRelationMatterId\>
    <MatterRelationRowVersion\>QEA=</MatterRelationRowVersion\>
  </GranicusMatterRelation\>
</ArrayOfGranicusMatterRelation\>

**Sample:**

(\[{"MatterRelationId":1,"MatterRelationGuid":"sample string 2","MatterRelationLastModifiedUtc":"2024-12-11T17:59:26.0653012-05:00","MatterRelationRowVersion":"QEA=","MatterRelationMatterId":3,"MatterRelationFlag":4},{"MatterRelationId":1,"MatterRelationGuid":"sample string 2","MatterRelationLastModifiedUtc":"2024-12-11T17:59:26.0653012-05:00","MatterRelationRowVersion":"QEA=","MatterRelationMatterId":3,"MatterRelationFlag":4}\]);

Title: GET v1/{Client}/Matters/{MatterId}/Indexes/{MatterIndexId}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Matters-MatterId-Indexes-MatterIndexId

Markdown Content:
Gets one Matter Index associated with a specific Matter.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| MatterId |  | integer | Required

 |
| MatterIndexId | The MatterIndexId of the Matter Index.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

[GranicusMatterIndex](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusMatterIndex)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| MatterIndexId |  | integer | None.
 |
| MatterIndexGuid |  | string | None.

 |
| MatterIndexLastModifiedUtc |  | date | None.

 |
| MatterIndexRowVersion |  | Collection of byte | None.

 |
| MatterIndexMatterId |  | integer | Required

 |
| MatterIndexIndexId |  | integer | Required

 |
| MatterIndexName |  | string | None.

 |

### Response Formats

**Sample:**

{
  "MatterIndexId": 1,
  "MatterIndexGuid": "sample string 2",
  "MatterIndexLastModifiedUtc": "2024-12-11T17:59:06.4959746-05:00",
  "MatterIndexRowVersion": "QEA=",
  "MatterIndexMatterId": 4,
  "MatterIndexIndexId": 5,
  "MatterIndexName": "sample string 6"
}

**Sample:**

<GranicusMatterIndex xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <MatterIndexGuid\>sample string 2</MatterIndexGuid\>
  <MatterIndexId\>1</MatterIndexId\>
  <MatterIndexIndexId\>5</MatterIndexIndexId\>
  <MatterIndexLastModifiedUtc\>2024-12-11T17:59:06.4959746-05:00</MatterIndexLastModifiedUtc\>
  <MatterIndexMatterId\>4</MatterIndexMatterId\>
  <MatterIndexName\>sample string 6</MatterIndexName\>
  <MatterIndexRowVersion\>QEA=</MatterIndexRowVersion\>
</GranicusMatterIndex\>

**Sample:**

({"MatterIndexId":1,"MatterIndexGuid":"sample string 2","MatterIndexLastModifiedUtc":"2024-12-11T17:59:06.4959746-05:00","MatterIndexRowVersion":"QEA=","MatterIndexMatterId":4,"MatterIndexIndexId":5,"MatterIndexName":"sample string 6"});

Title: GET v1/{Client}/Matters/{MatterId}/Indexes

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Matters-MatterId-Indexes

Markdown Content:
Gets all Matter Indexes for one Matter record.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| MatterId | The MatterId of the Matter.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusMatterIndex](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusMatterIndex)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| MatterIndexId |  | integer | None.
 |
| MatterIndexGuid |  | string | None.

 |
| MatterIndexLastModifiedUtc |  | date | None.

 |
| MatterIndexRowVersion |  | Collection of byte | None.

 |
| MatterIndexMatterId |  | integer | Required

 |
| MatterIndexIndexId |  | integer | Required

 |
| MatterIndexName |  | string | None.

 |

### Response Formats

**Sample:**

\[
  {
    "MatterIndexId": 1,
    "MatterIndexGuid": "sample string 2",
    "MatterIndexLastModifiedUtc": "2024-12-11T17:58:44.7430358-05:00",
    "MatterIndexRowVersion": "QEA=",
    "MatterIndexMatterId": 4,
    "MatterIndexIndexId": 5,
    "MatterIndexName": "sample string 6"
  },
  {
    "MatterIndexId": 1,
    "MatterIndexGuid": "sample string 2",
    "MatterIndexLastModifiedUtc": "2024-12-11T17:58:44.7430358-05:00",
    "MatterIndexRowVersion": "QEA=",
    "MatterIndexMatterId": 4,
    "MatterIndexIndexId": 5,
    "MatterIndexName": "sample string 6"
  }
\]

**Sample:**

<ArrayOfGranicusMatterIndex xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusMatterIndex\>
    <MatterIndexGuid\>sample string 2</MatterIndexGuid\>
    <MatterIndexId\>1</MatterIndexId\>
    <MatterIndexIndexId\>5</MatterIndexIndexId\>
    <MatterIndexLastModifiedUtc\>2024-12-11T17:58:44.7430358-05:00</MatterIndexLastModifiedUtc\>
    <MatterIndexMatterId\>4</MatterIndexMatterId\>
    <MatterIndexName\>sample string 6</MatterIndexName\>
    <MatterIndexRowVersion\>QEA=</MatterIndexRowVersion\>
  </GranicusMatterIndex\>
  <GranicusMatterIndex\>
    <MatterIndexGuid\>sample string 2</MatterIndexGuid\>
    <MatterIndexId\>1</MatterIndexId\>
    <MatterIndexIndexId\>5</MatterIndexIndexId\>
    <MatterIndexLastModifiedUtc\>2024-12-11T17:58:44.7430358-05:00</MatterIndexLastModifiedUtc\>
    <MatterIndexMatterId\>4</MatterIndexMatterId\>
    <MatterIndexName\>sample string 6</MatterIndexName\>
    <MatterIndexRowVersion\>QEA=</MatterIndexRowVersion\>
  </GranicusMatterIndex\>
</ArrayOfGranicusMatterIndex\>

**Sample:**

(\[{"MatterIndexId":1,"MatterIndexGuid":"sample string 2","MatterIndexLastModifiedUtc":"2024-12-11T17:58:44.7430358-05:00","MatterIndexRowVersion":"QEA=","MatterIndexMatterId":4,"MatterIndexIndexId":5,"MatterIndexName":"sample string 6"},{"MatterIndexId":1,"MatterIndexGuid":"sample string 2","MatterIndexLastModifiedUtc":"2024-12-11T17:58:44.7430358-05:00","MatterIndexRowVersion":"QEA=","MatterIndexMatterId":4,"MatterIndexIndexId":5,"MatterIndexName":"sample string 6"}\]);

Title: GET v1/{Client}/MatterIndexes/Matter/{MatterId}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-MatterIndexes-Matter-MatterId

Markdown Content:
Gets all Matter Indexes for one Matter record.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| MatterId | The MatterId of the Matter.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusMatterIndex](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusMatterIndex)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| MatterIndexId |  | integer | None.
 |
| MatterIndexGuid |  | string | None.

 |
| MatterIndexLastModifiedUtc |  | date | None.

 |
| MatterIndexRowVersion |  | Collection of byte | None.

 |
| MatterIndexMatterId |  | integer | Required

 |
| MatterIndexIndexId |  | integer | Required

 |
| MatterIndexName |  | string | None.

 |

### Response Formats

**Sample:**

\[
  {
    "MatterIndexId": 1,
    "MatterIndexGuid": "sample string 2",
    "MatterIndexLastModifiedUtc": "2024-12-11T17:58:38.8281779-05:00",
    "MatterIndexRowVersion": "QEA=",
    "MatterIndexMatterId": 4,
    "MatterIndexIndexId": 5,
    "MatterIndexName": "sample string 6"
  },
  {
    "MatterIndexId": 1,
    "MatterIndexGuid": "sample string 2",
    "MatterIndexLastModifiedUtc": "2024-12-11T17:58:38.8281779-05:00",
    "MatterIndexRowVersion": "QEA=",
    "MatterIndexMatterId": 4,
    "MatterIndexIndexId": 5,
    "MatterIndexName": "sample string 6"
  }
\]

**Sample:**

<ArrayOfGranicusMatterIndex xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusMatterIndex\>
    <MatterIndexGuid\>sample string 2</MatterIndexGuid\>
    <MatterIndexId\>1</MatterIndexId\>
    <MatterIndexIndexId\>5</MatterIndexIndexId\>
    <MatterIndexLastModifiedUtc\>2024-12-11T17:58:38.8281779-05:00</MatterIndexLastModifiedUtc\>
    <MatterIndexMatterId\>4</MatterIndexMatterId\>
    <MatterIndexName\>sample string 6</MatterIndexName\>
    <MatterIndexRowVersion\>QEA=</MatterIndexRowVersion\>
  </GranicusMatterIndex\>
  <GranicusMatterIndex\>
    <MatterIndexGuid\>sample string 2</MatterIndexGuid\>
    <MatterIndexId\>1</MatterIndexId\>
    <MatterIndexIndexId\>5</MatterIndexIndexId\>
    <MatterIndexLastModifiedUtc\>2024-12-11T17:58:38.8281779-05:00</MatterIndexLastModifiedUtc\>
    <MatterIndexMatterId\>4</MatterIndexMatterId\>
    <MatterIndexName\>sample string 6</MatterIndexName\>
    <MatterIndexRowVersion\>QEA=</MatterIndexRowVersion\>
  </GranicusMatterIndex\>
</ArrayOfGranicusMatterIndex\>

**Sample:**

(\[{"MatterIndexId":1,"MatterIndexGuid":"sample string 2","MatterIndexLastModifiedUtc":"2024-12-11T17:58:38.8281779-05:00","MatterIndexRowVersion":"QEA=","MatterIndexMatterId":4,"MatterIndexIndexId":5,"MatterIndexName":"sample string 6"},{"MatterIndexId":1,"MatterIndexGuid":"sample string 2","MatterIndexLastModifiedUtc":"2024-12-11T17:58:38.8281779-05:00","MatterIndexRowVersion":"QEA=","MatterIndexMatterId":4,"MatterIndexIndexId":5,"MatterIndexName":"sample string 6"}\]);

Title: GET v1/{Client}/MatterIndexes/Index/{IndexId}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-MatterIndexes-Index-IndexId

Markdown Content:
Gets all Matter Indexes for one IndexID.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| IndexId |  | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusMatterIndex](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusMatterIndex)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| MatterIndexId |  | integer | None.
 |
| MatterIndexGuid |  | string | None.

 |
| MatterIndexLastModifiedUtc |  | date | None.

 |
| MatterIndexRowVersion |  | Collection of byte | None.

 |
| MatterIndexMatterId |  | integer | Required

 |
| MatterIndexIndexId |  | integer | Required

 |
| MatterIndexName |  | string | None.

 |

### Response Formats

**Sample:**

\[
  {
    "MatterIndexId": 1,
    "MatterIndexGuid": "sample string 2",
    "MatterIndexLastModifiedUtc": "2024-12-11T17:58:10.5257662-05:00",
    "MatterIndexRowVersion": "QEA=",
    "MatterIndexMatterId": 4,
    "MatterIndexIndexId": 5,
    "MatterIndexName": "sample string 6"
  },
  {
    "MatterIndexId": 1,
    "MatterIndexGuid": "sample string 2",
    "MatterIndexLastModifiedUtc": "2024-12-11T17:58:10.5257662-05:00",
    "MatterIndexRowVersion": "QEA=",
    "MatterIndexMatterId": 4,
    "MatterIndexIndexId": 5,
    "MatterIndexName": "sample string 6"
  }
\]

**Sample:**

<ArrayOfGranicusMatterIndex xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusMatterIndex\>
    <MatterIndexGuid\>sample string 2</MatterIndexGuid\>
    <MatterIndexId\>1</MatterIndexId\>
    <MatterIndexIndexId\>5</MatterIndexIndexId\>
    <MatterIndexLastModifiedUtc\>2024-12-11T17:58:10.5257662-05:00</MatterIndexLastModifiedUtc\>
    <MatterIndexMatterId\>4</MatterIndexMatterId\>
    <MatterIndexName\>sample string 6</MatterIndexName\>
    <MatterIndexRowVersion\>QEA=</MatterIndexRowVersion\>
  </GranicusMatterIndex\>
  <GranicusMatterIndex\>
    <MatterIndexGuid\>sample string 2</MatterIndexGuid\>
    <MatterIndexId\>1</MatterIndexId\>
    <MatterIndexIndexId\>5</MatterIndexIndexId\>
    <MatterIndexLastModifiedUtc\>2024-12-11T17:58:10.5257662-05:00</MatterIndexLastModifiedUtc\>
    <MatterIndexMatterId\>4</MatterIndexMatterId\>
    <MatterIndexName\>sample string 6</MatterIndexName\>
    <MatterIndexRowVersion\>QEA=</MatterIndexRowVersion\>
  </GranicusMatterIndex\>
</ArrayOfGranicusMatterIndex\>

**Sample:**

(\[{"MatterIndexId":1,"MatterIndexGuid":"sample string 2","MatterIndexLastModifiedUtc":"2024-12-11T17:58:10.5257662-05:00","MatterIndexRowVersion":"QEA=","MatterIndexMatterId":4,"MatterIndexIndexId":5,"MatterIndexName":"sample string 6"},{"MatterIndexId":1,"MatterIndexGuid":"sample string 2","MatterIndexLastModifiedUtc":"2024-12-11T17:58:10.5257662-05:00","MatterIndexRowVersion":"QEA=","MatterIndexMatterId":4,"MatterIndexIndexId":5,"MatterIndexName":"sample string 6"}\]);

Title: GET v1/{Client}/MatterIndexes/{MatterIndexId}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-MatterIndexes-MatterIndexId

Markdown Content:
Gets one Matter Index.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| MatterIndexId |  | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusMatterIndex](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusMatterIndex)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| MatterIndexId |  | integer | None.
 |
| MatterIndexGuid |  | string | None.

 |
| MatterIndexLastModifiedUtc |  | date | None.

 |
| MatterIndexRowVersion |  | Collection of byte | None.

 |
| MatterIndexMatterId |  | integer | Required

 |
| MatterIndexIndexId |  | integer | Required

 |
| MatterIndexName |  | string | None.

 |

### Response Formats

**Sample:**

\[
  {
    "MatterIndexId": 1,
    "MatterIndexGuid": "sample string 2",
    "MatterIndexLastModifiedUtc": "2024-12-11T17:57:55.62019-05:00",
    "MatterIndexRowVersion": "QEA=",
    "MatterIndexMatterId": 4,
    "MatterIndexIndexId": 5,
    "MatterIndexName": "sample string 6"
  },
  {
    "MatterIndexId": 1,
    "MatterIndexGuid": "sample string 2",
    "MatterIndexLastModifiedUtc": "2024-12-11T17:57:55.62019-05:00",
    "MatterIndexRowVersion": "QEA=",
    "MatterIndexMatterId": 4,
    "MatterIndexIndexId": 5,
    "MatterIndexName": "sample string 6"
  }
\]

**Sample:**

<ArrayOfGranicusMatterIndex xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusMatterIndex\>
    <MatterIndexGuid\>sample string 2</MatterIndexGuid\>
    <MatterIndexId\>1</MatterIndexId\>
    <MatterIndexIndexId\>5</MatterIndexIndexId\>
    <MatterIndexLastModifiedUtc\>2024-12-11T17:57:55.62019-05:00</MatterIndexLastModifiedUtc\>
    <MatterIndexMatterId\>4</MatterIndexMatterId\>
    <MatterIndexName\>sample string 6</MatterIndexName\>
    <MatterIndexRowVersion\>QEA=</MatterIndexRowVersion\>
  </GranicusMatterIndex\>
  <GranicusMatterIndex\>
    <MatterIndexGuid\>sample string 2</MatterIndexGuid\>
    <MatterIndexId\>1</MatterIndexId\>
    <MatterIndexIndexId\>5</MatterIndexIndexId\>
    <MatterIndexLastModifiedUtc\>2024-12-11T17:57:55.62019-05:00</MatterIndexLastModifiedUtc\>
    <MatterIndexMatterId\>4</MatterIndexMatterId\>
    <MatterIndexName\>sample string 6</MatterIndexName\>
    <MatterIndexRowVersion\>QEA=</MatterIndexRowVersion\>
  </GranicusMatterIndex\>
</ArrayOfGranicusMatterIndex\>

**Sample:**

(\[{"MatterIndexId":1,"MatterIndexGuid":"sample string 2","MatterIndexLastModifiedUtc":"2024-12-11T17:57:55.62019-05:00","MatterIndexRowVersion":"QEA=","MatterIndexMatterId":4,"MatterIndexIndexId":5,"MatterIndexName":"sample string 6"},{"MatterIndexId":1,"MatterIndexGuid":"sample string 2","MatterIndexLastModifiedUtc":"2024-12-11T17:57:55.62019-05:00","MatterIndexRowVersion":"QEA=","MatterIndexMatterId":4,"MatterIndexIndexId":5,"MatterIndexName":"sample string 6"}\]);

Title: GET v1/{Client}/MatterIndexes

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-MatterIndexes

Markdown Content:
Gets all Matter Indexes.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusMatterIndex](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusMatterIndex)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| MatterIndexId |  | integer | None.
 |
| MatterIndexGuid |  | string | None.

 |
| MatterIndexLastModifiedUtc |  | date | None.

 |
| MatterIndexRowVersion |  | Collection of byte | None.

 |
| MatterIndexMatterId |  | integer | Required

 |
| MatterIndexIndexId |  | integer | Required

 |
| MatterIndexName |  | string | None.

 |

### Response Formats

**Sample:**

\[
  {
    "MatterIndexId": 1,
    "MatterIndexGuid": "sample string 2",
    "MatterIndexLastModifiedUtc": "2024-12-11T17:57:54.8252571-05:00",
    "MatterIndexRowVersion": "QEA=",
    "MatterIndexMatterId": 4,
    "MatterIndexIndexId": 5,
    "MatterIndexName": "sample string 6"
  },
  {
    "MatterIndexId": 1,
    "MatterIndexGuid": "sample string 2",
    "MatterIndexLastModifiedUtc": "2024-12-11T17:57:54.8252571-05:00",
    "MatterIndexRowVersion": "QEA=",
    "MatterIndexMatterId": 4,
    "MatterIndexIndexId": 5,
    "MatterIndexName": "sample string 6"
  }
\]

**Sample:**

<ArrayOfGranicusMatterIndex xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusMatterIndex\>
    <MatterIndexGuid\>sample string 2</MatterIndexGuid\>
    <MatterIndexId\>1</MatterIndexId\>
    <MatterIndexIndexId\>5</MatterIndexIndexId\>
    <MatterIndexLastModifiedUtc\>2024-12-11T17:57:54.8252571-05:00</MatterIndexLastModifiedUtc\>
    <MatterIndexMatterId\>4</MatterIndexMatterId\>
    <MatterIndexName\>sample string 6</MatterIndexName\>
    <MatterIndexRowVersion\>QEA=</MatterIndexRowVersion\>
  </GranicusMatterIndex\>
  <GranicusMatterIndex\>
    <MatterIndexGuid\>sample string 2</MatterIndexGuid\>
    <MatterIndexId\>1</MatterIndexId\>
    <MatterIndexIndexId\>5</MatterIndexIndexId\>
    <MatterIndexLastModifiedUtc\>2024-12-11T17:57:54.8252571-05:00</MatterIndexLastModifiedUtc\>
    <MatterIndexMatterId\>4</MatterIndexMatterId\>
    <MatterIndexName\>sample string 6</MatterIndexName\>
    <MatterIndexRowVersion\>QEA=</MatterIndexRowVersion\>
  </GranicusMatterIndex\>
</ArrayOfGranicusMatterIndex\>

**Sample:**

(\[{"MatterIndexId":1,"MatterIndexGuid":"sample string 2","MatterIndexLastModifiedUtc":"2024-12-11T17:57:54.8252571-05:00","MatterIndexRowVersion":"QEA=","MatterIndexMatterId":4,"MatterIndexIndexId":5,"MatterIndexName":"sample string 6"},{"MatterIndexId":1,"MatterIndexGuid":"sample string 2","MatterIndexLastModifiedUtc":"2024-12-11T17:57:54.8252571-05:00","MatterIndexRowVersion":"QEA=","MatterIndexMatterId":4,"MatterIndexIndexId":5,"MatterIndexName":"sample string 6"}\]);

Title: GET v1/{Client}/Matters/{MatterId}/Histories/{MatterHistoryId}?AgendaNote={AgendaNote}&MinutesNote={MinutesNote}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Matters-MatterId-Histories-MatterHistoryId_AgendaNote_MinutesNote

Markdown Content:
Gets one Matter History record.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| MatterId | The Id of the Matter.

 | integer | Required

 |
| MatterHistoryId | The Id of the Matter History.

 | integer | Required

 |
| AgendaNote | An optional parameter that specifies whethere the agenda note should be included. Set to 1 to include. 0 by default.

 | integer | Default value is 0

 |
| MinutesNote | An optional parameter that specifies whethere the minutes note should be included. Set to 1 to include. 0 by default.

 | integer | Default value is 0

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

[GranicusMatterHistory](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusMatterHistory)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| MatterHistoryId |  | integer | None.
 |
| MatterHistoryGuid |  | string | None.

 |
| MatterHistoryLastModifiedUtc |  | date | None.

 |
| MatterHistoryRowVersion |  | Collection of byte | None.

 |
| MatterHistoryEventId |  | integer | None.

 |
| MatterHistoryAgendaSequence |  | integer | None.

 |
| MatterHistoryMinutesSequence |  | integer | None.

 |
| MatterHistoryAgendaNumber |  | string | None.

 |
| MatterHistoryVideo |  | integer | None.

 |
| MatterHistoryVideoIndex |  | integer | None.

 |
| MatterHistoryVersion |  | string | None.

 |
| MatterHistoryAgendaNote |  | string | None.

 |
| MatterHistoryMinutesNote |  | string | None.

 |
| MatterHistoryActionDate |  | date | None.

 |
| MatterHistoryActionId |  | integer | None.

 |
| MatterHistoryActionName |  | string | None.

 |
| MatterHistoryActionText |  | string | None.

 |
| MatterHistoryActionBodyId |  | integer | None.

 |
| MatterHistoryActionBodyName |  | string | None.

 |
| MatterHistoryPassedFlag |  | integer | None.

 |
| MatterHistoryPassedFlagName |  | string | None.

 |
| MatterHistoryRollCallFlag |  | integer | None.

 |
| MatterHistoryFlagExtra |  | integer | None.

 |
| MatterHistoryTally |  | string | None.

 |
| MatterHistoryAccelaRecordId |  | string | None.

 |
| MatterHistoryConsent |  | integer | None.

 |
| MatterHistoryMoverId |  | integer | None.

 |
| MatterHistoryMoverName |  | string | None.

 |
| MatterHistorySeconderId |  | integer | None.

 |
| MatterHistorySeconderName |  | string | None.

 |
| MatterHistoryMatterStatusId |  | integer | None.

 |

### Response Formats

**Sample:**

{
  "MatterHistoryId": 1,
  "MatterHistoryGuid": "sample string 2",
  "MatterHistoryLastModifiedUtc": "2024-12-11T17:57:36.1328273-05:00",
  "MatterHistoryRowVersion": "QEA=",
  "MatterHistoryEventId": 1,
  "MatterHistoryAgendaSequence": 1,
  "MatterHistoryMinutesSequence": 1,
  "MatterHistoryAgendaNumber": "sample string 4",
  "MatterHistoryVideo": 1,
  "MatterHistoryVideoIndex": 1,
  "MatterHistoryVersion": "sample string 5",
  "MatterHistoryAgendaNote": "sample string 6",
  "MatterHistoryMinutesNote": "sample string 7",
  "MatterHistoryActionDate": "2024-12-11T17:57:36.1328273-05:00",
  "MatterHistoryActionId": 1,
  "MatterHistoryActionName": "sample string 8",
  "MatterHistoryActionText": "sample string 9",
  "MatterHistoryActionBodyId": 1,
  "MatterHistoryActionBodyName": "sample string 10",
  "MatterHistoryPassedFlag": 1,
  "MatterHistoryPassedFlagName": "sample string 11",
  "MatterHistoryRollCallFlag": 1,
  "MatterHistoryFlagExtra": 1,
  "MatterHistoryTally": "sample string 12",
  "MatterHistoryAccelaRecordId": "sample string 13",
  "MatterHistoryConsent": 14,
  "MatterHistoryMoverId": 1,
  "MatterHistoryMoverName": "sample string 15",
  "MatterHistorySeconderId": 1,
  "MatterHistorySeconderName": "sample string 16",
  "MatterHistoryMatterStatusId": 1
}

**Sample:**

<GranicusMatterHistory xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <MatterHistoryAccelaRecordId\>sample string 13</MatterHistoryAccelaRecordId\>
  <MatterHistoryActionBodyId\>1</MatterHistoryActionBodyId\>
  <MatterHistoryActionBodyName\>sample string 10</MatterHistoryActionBodyName\>
  <MatterHistoryActionDate\>2024-12-11T17:57:36.1328273-05:00</MatterHistoryActionDate\>
  <MatterHistoryActionId\>1</MatterHistoryActionId\>
  <MatterHistoryActionName\>sample string 8</MatterHistoryActionName\>
  <MatterHistoryActionText\>sample string 9</MatterHistoryActionText\>
  <MatterHistoryAgendaNote\>sample string 6</MatterHistoryAgendaNote\>
  <MatterHistoryAgendaNumber\>sample string 4</MatterHistoryAgendaNumber\>
  <MatterHistoryAgendaSequence\>1</MatterHistoryAgendaSequence\>
  <MatterHistoryConsent\>14</MatterHistoryConsent\>
  <MatterHistoryEventId\>1</MatterHistoryEventId\>
  <MatterHistoryFlagExtra\>1</MatterHistoryFlagExtra\>
  <MatterHistoryGuid\>sample string 2</MatterHistoryGuid\>
  <MatterHistoryId\>1</MatterHistoryId\>
  <MatterHistoryLastModifiedUtc\>2024-12-11T17:57:36.1328273-05:00</MatterHistoryLastModifiedUtc\>
  <MatterHistoryMatterStatusId\>1</MatterHistoryMatterStatusId\>
  <MatterHistoryMinutesNote\>sample string 7</MatterHistoryMinutesNote\>
  <MatterHistoryMinutesSequence\>1</MatterHistoryMinutesSequence\>
  <MatterHistoryMoverId\>1</MatterHistoryMoverId\>
  <MatterHistoryMoverName\>sample string 15</MatterHistoryMoverName\>
  <MatterHistoryPassedFlag\>1</MatterHistoryPassedFlag\>
  <MatterHistoryPassedFlagName\>sample string 11</MatterHistoryPassedFlagName\>
  <MatterHistoryRollCallFlag\>1</MatterHistoryRollCallFlag\>
  <MatterHistoryRowVersion\>QEA=</MatterHistoryRowVersion\>
  <MatterHistorySeconderId\>1</MatterHistorySeconderId\>
  <MatterHistorySeconderName\>sample string 16</MatterHistorySeconderName\>
  <MatterHistoryTally\>sample string 12</MatterHistoryTally\>
  <MatterHistoryVersion\>sample string 5</MatterHistoryVersion\>
  <MatterHistoryVideo\>1</MatterHistoryVideo\>
  <MatterHistoryVideoIndex\>1</MatterHistoryVideoIndex\>
</GranicusMatterHistory\>

**Sample:**

({"MatterHistoryId":1,"MatterHistoryGuid":"sample string 2","MatterHistoryLastModifiedUtc":"2024-12-11T17:57:36.1328273-05:00","MatterHistoryRowVersion":"QEA=","MatterHistoryEventId":1,"MatterHistoryAgendaSequence":1,"MatterHistoryMinutesSequence":1,"MatterHistoryAgendaNumber":"sample string 4","MatterHistoryVideo":1,"MatterHistoryVideoIndex":1,"MatterHistoryVersion":"sample string 5","MatterHistoryAgendaNote":"sample string 6","MatterHistoryMinutesNote":"sample string 7","MatterHistoryActionDate":"2024-12-11T17:57:36.1328273-05:00","MatterHistoryActionId":1,"MatterHistoryActionName":"sample string 8","MatterHistoryActionText":"sample string 9","MatterHistoryActionBodyId":1,"MatterHistoryActionBodyName":"sample string 10","MatterHistoryPassedFlag":1,"MatterHistoryPassedFlagName":"sample string 11","MatterHistoryRollCallFlag":1,"MatterHistoryFlagExtra":1,"MatterHistoryTally":"sample string 12","MatterHistoryAccelaRecordId":"sample string 13","MatterHistoryConsent":14,"MatterHistoryMoverId":1,"MatterHistoryMoverName":"sample string 15","MatterHistorySeconderId":1,"MatterHistorySeconderName":"sample string 16","MatterHistoryMatterStatusId":1});

Title: GET v1/{Client}/Matters/{MatterId}/Histories?AgendaNote={AgendaNote}&MinutesNote={MinutesNote}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Matters-MatterId-Histories_AgendaNote_MinutesNote

Markdown Content:
Gets all Matter History records under a particular Matter.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| MatterId | The Id of the Matter.

 | integer | Required

 |
| AgendaNote | An optional parameter that specifies whether the agenda note should be included. Set to 1 to include. 0 by default.

 | integer | Default value is 0

 |
| MinutesNote | An optional parameter that specifies whether the minutes note should be included. Set to 1 to include. 0 by default.

 | integer | Default value is 0

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusMatterHistory](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusMatterHistory)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| MatterHistoryId |  | integer | None.
 |
| MatterHistoryGuid |  | string | None.

 |
| MatterHistoryLastModifiedUtc |  | date | None.

 |
| MatterHistoryRowVersion |  | Collection of byte | None.

 |
| MatterHistoryEventId |  | integer | None.

 |
| MatterHistoryAgendaSequence |  | integer | None.

 |
| MatterHistoryMinutesSequence |  | integer | None.

 |
| MatterHistoryAgendaNumber |  | string | None.

 |
| MatterHistoryVideo |  | integer | None.

 |
| MatterHistoryVideoIndex |  | integer | None.

 |
| MatterHistoryVersion |  | string | None.

 |
| MatterHistoryAgendaNote |  | string | None.

 |
| MatterHistoryMinutesNote |  | string | None.

 |
| MatterHistoryActionDate |  | date | None.

 |
| MatterHistoryActionId |  | integer | None.

 |
| MatterHistoryActionName |  | string | None.

 |
| MatterHistoryActionText |  | string | None.

 |
| MatterHistoryActionBodyId |  | integer | None.

 |
| MatterHistoryActionBodyName |  | string | None.

 |
| MatterHistoryPassedFlag |  | integer | None.

 |
| MatterHistoryPassedFlagName |  | string | None.

 |
| MatterHistoryRollCallFlag |  | integer | None.

 |
| MatterHistoryFlagExtra |  | integer | None.

 |
| MatterHistoryTally |  | string | None.

 |
| MatterHistoryAccelaRecordId |  | string | None.

 |
| MatterHistoryConsent |  | integer | None.

 |
| MatterHistoryMoverId |  | integer | None.

 |
| MatterHistoryMoverName |  | string | None.

 |
| MatterHistorySeconderId |  | integer | None.

 |
| MatterHistorySeconderName |  | string | None.

 |
| MatterHistoryMatterStatusId |  | integer | None.

 |

### Response Formats

**Sample:**

\[
  {
    "MatterHistoryId": 1,
    "MatterHistoryGuid": "sample string 2",
    "MatterHistoryLastModifiedUtc": "2024-12-11T17:57:13.9671746-05:00",
    "MatterHistoryRowVersion": "QEA=",
    "MatterHistoryEventId": 1,
    "MatterHistoryAgendaSequence": 1,
    "MatterHistoryMinutesSequence": 1,
    "MatterHistoryAgendaNumber": "sample string 4",
    "MatterHistoryVideo": 1,
    "MatterHistoryVideoIndex": 1,
    "MatterHistoryVersion": "sample string 5",
    "MatterHistoryAgendaNote": "sample string 6",
    "MatterHistoryMinutesNote": "sample string 7",
    "MatterHistoryActionDate": "2024-12-11T17:57:13.9828306-05:00",
    "MatterHistoryActionId": 1,
    "MatterHistoryActionName": "sample string 8",
    "MatterHistoryActionText": "sample string 9",
    "MatterHistoryActionBodyId": 1,
    "MatterHistoryActionBodyName": "sample string 10",
    "MatterHistoryPassedFlag": 1,
    "MatterHistoryPassedFlagName": "sample string 11",
    "MatterHistoryRollCallFlag": 1,
    "MatterHistoryFlagExtra": 1,
    "MatterHistoryTally": "sample string 12",
    "MatterHistoryAccelaRecordId": "sample string 13",
    "MatterHistoryConsent": 14,
    "MatterHistoryMoverId": 1,
    "MatterHistoryMoverName": "sample string 15",
    "MatterHistorySeconderId": 1,
    "MatterHistorySeconderName": "sample string 16",
    "MatterHistoryMatterStatusId": 1
  },
  {
    "MatterHistoryId": 1,
    "MatterHistoryGuid": "sample string 2",
    "MatterHistoryLastModifiedUtc": "2024-12-11T17:57:13.9671746-05:00",
    "MatterHistoryRowVersion": "QEA=",
    "MatterHistoryEventId": 1,
    "MatterHistoryAgendaSequence": 1,
    "MatterHistoryMinutesSequence": 1,
    "MatterHistoryAgendaNumber": "sample string 4",
    "MatterHistoryVideo": 1,
    "MatterHistoryVideoIndex": 1,
    "MatterHistoryVersion": "sample string 5",
    "MatterHistoryAgendaNote": "sample string 6",
    "MatterHistoryMinutesNote": "sample string 7",
    "MatterHistoryActionDate": "2024-12-11T17:57:13.9828306-05:00",
    "MatterHistoryActionId": 1,
    "MatterHistoryActionName": "sample string 8",
    "MatterHistoryActionText": "sample string 9",
    "MatterHistoryActionBodyId": 1,
    "MatterHistoryActionBodyName": "sample string 10",
    "MatterHistoryPassedFlag": 1,
    "MatterHistoryPassedFlagName": "sample string 11",
    "MatterHistoryRollCallFlag": 1,
    "MatterHistoryFlagExtra": 1,
    "MatterHistoryTally": "sample string 12",
    "MatterHistoryAccelaRecordId": "sample string 13",
    "MatterHistoryConsent": 14,
    "MatterHistoryMoverId": 1,
    "MatterHistoryMoverName": "sample string 15",
    "MatterHistorySeconderId": 1,
    "MatterHistorySeconderName": "sample string 16",
    "MatterHistoryMatterStatusId": 1
  }
\]

**Sample:**

<ArrayOfGranicusMatterHistory xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusMatterHistory\>
    <MatterHistoryAccelaRecordId\>sample string 13</MatterHistoryAccelaRecordId\>
    <MatterHistoryActionBodyId\>1</MatterHistoryActionBodyId\>
    <MatterHistoryActionBodyName\>sample string 10</MatterHistoryActionBodyName\>
    <MatterHistoryActionDate\>2024-12-11T17:57:13.9828306-05:00</MatterHistoryActionDate\>
    <MatterHistoryActionId\>1</MatterHistoryActionId\>
    <MatterHistoryActionName\>sample string 8</MatterHistoryActionName\>
    <MatterHistoryActionText\>sample string 9</MatterHistoryActionText\>
    <MatterHistoryAgendaNote\>sample string 6</MatterHistoryAgendaNote\>
    <MatterHistoryAgendaNumber\>sample string 4</MatterHistoryAgendaNumber\>
    <MatterHistoryAgendaSequence\>1</MatterHistoryAgendaSequence\>
    <MatterHistoryConsent\>14</MatterHistoryConsent\>
    <MatterHistoryEventId\>1</MatterHistoryEventId\>
    <MatterHistoryFlagExtra\>1</MatterHistoryFlagExtra\>
    <MatterHistoryGuid\>sample string 2</MatterHistoryGuid\>
    <MatterHistoryId\>1</MatterHistoryId\>
    <MatterHistoryLastModifiedUtc\>2024-12-11T17:57:13.9671746-05:00</MatterHistoryLastModifiedUtc\>
    <MatterHistoryMatterStatusId\>1</MatterHistoryMatterStatusId\>
    <MatterHistoryMinutesNote\>sample string 7</MatterHistoryMinutesNote\>
    <MatterHistoryMinutesSequence\>1</MatterHistoryMinutesSequence\>
    <MatterHistoryMoverId\>1</MatterHistoryMoverId\>
    <MatterHistoryMoverName\>sample string 15</MatterHistoryMoverName\>
    <MatterHistoryPassedFlag\>1</MatterHistoryPassedFlag\>
    <MatterHistoryPassedFlagName\>sample string 11</MatterHistoryPassedFlagName\>
    <MatterHistoryRollCallFlag\>1</MatterHistoryRollCallFlag\>
    <MatterHistoryRowVersion\>QEA=</MatterHistoryRowVersion\>
    <MatterHistorySeconderId\>1</MatterHistorySeconderId\>
    <MatterHistorySeconderName\>sample string 16</MatterHistorySeconderName\>
    <MatterHistoryTally\>sample string 12</MatterHistoryTally\>
    <MatterHistoryVersion\>sample string 5</MatterHistoryVersion\>
    <MatterHistoryVideo\>1</MatterHistoryVideo\>
    <MatterHistoryVideoIndex\>1</MatterHistoryVideoIndex\>
  </GranicusMatterHistory\>
  <GranicusMatterHistory\>
    <MatterHistoryAccelaRecordId\>sample string 13</MatterHistoryAccelaRecordId\>
    <MatterHistoryActionBodyId\>1</MatterHistoryActionBodyId\>
    <MatterHistoryActionBodyName\>sample string 10</MatterHistoryActionBodyName\>
    <MatterHistoryActionDate\>2024-12-11T17:57:13.9828306-05:00</MatterHistoryActionDate\>
    <MatterHistoryActionId\>1</MatterHistoryActionId\>
    <MatterHistoryActionName\>sample string 8</MatterHistoryActionName\>
    <MatterHistoryActionText\>sample string 9</MatterHistoryActionText\>
    <MatterHistoryAgendaNote\>sample string 6</MatterHistoryAgendaNote\>
    <MatterHistoryAgendaNumber\>sample string 4</MatterHistoryAgendaNumber\>
    <MatterHistoryAgendaSequence\>1</MatterHistoryAgendaSequence\>
    <MatterHistoryConsent\>14</MatterHistoryConsent\>
    <MatterHistoryEventId\>1</MatterHistoryEventId\>
    <MatterHistoryFlagExtra\>1</MatterHistoryFlagExtra\>
    <MatterHistoryGuid\>sample string 2</MatterHistoryGuid\>
    <MatterHistoryId\>1</MatterHistoryId\>
    <MatterHistoryLastModifiedUtc\>2024-12-11T17:57:13.9671746-05:00</MatterHistoryLastModifiedUtc\>
    <MatterHistoryMatterStatusId\>1</MatterHistoryMatterStatusId\>
    <MatterHistoryMinutesNote\>sample string 7</MatterHistoryMinutesNote\>
    <MatterHistoryMinutesSequence\>1</MatterHistoryMinutesSequence\>
    <MatterHistoryMoverId\>1</MatterHistoryMoverId\>
    <MatterHistoryMoverName\>sample string 15</MatterHistoryMoverName\>
    <MatterHistoryPassedFlag\>1</MatterHistoryPassedFlag\>
    <MatterHistoryPassedFlagName\>sample string 11</MatterHistoryPassedFlagName\>
    <MatterHistoryRollCallFlag\>1</MatterHistoryRollCallFlag\>
    <MatterHistoryRowVersion\>QEA=</MatterHistoryRowVersion\>
    <MatterHistorySeconderId\>1</MatterHistorySeconderId\>
    <MatterHistorySeconderName\>sample string 16</MatterHistorySeconderName\>
    <MatterHistoryTally\>sample string 12</MatterHistoryTally\>
    <MatterHistoryVersion\>sample string 5</MatterHistoryVersion\>
    <MatterHistoryVideo\>1</MatterHistoryVideo\>
    <MatterHistoryVideoIndex\>1</MatterHistoryVideoIndex\>
  </GranicusMatterHistory\>
</ArrayOfGranicusMatterHistory\>

**Sample:**

(\[{"MatterHistoryId":1,"MatterHistoryGuid":"sample string 2","MatterHistoryLastModifiedUtc":"2024-12-11T17:57:13.9671746-05:00","MatterHistoryRowVersion":"QEA=","MatterHistoryEventId":1,"MatterHistoryAgendaSequence":1,"MatterHistoryMinutesSequence":1,"MatterHistoryAgendaNumber":"sample string 4","MatterHistoryVideo":1,"MatterHistoryVideoIndex":1,"MatterHistoryVersion":"sample string 5","MatterHistoryAgendaNote":"sample string 6","MatterHistoryMinutesNote":"sample string 7","MatterHistoryActionDate":"2024-12-11T17:57:13.9828306-05:00","MatterHistoryActionId":1,"MatterHistoryActionName":"sample string 8","MatterHistoryActionText":"sample string 9","MatterHistoryActionBodyId":1,"MatterHistoryActionBodyName":"sample string 10","MatterHistoryPassedFlag":1,"MatterHistoryPassedFlagName":"sample string 11","MatterHistoryRollCallFlag":1,"MatterHistoryFlagExtra":1,"MatterHistoryTally":"sample string 12","MatterHistoryAccelaRecordId":"sample string 13","MatterHistoryConsent":14,"MatterHistoryMoverId":1,"MatterHistoryMoverName":"sample string 15","MatterHistorySeconderId":1,"MatterHistorySeconderName":"sample string 16","MatterHistoryMatterStatusId":1},{"MatterHistoryId":1,"MatterHistoryGuid":"sample string 2","MatterHistoryLastModifiedUtc":"2024-12-11T17:57:13.9671746-05:00","MatterHistoryRowVersion":"QEA=","MatterHistoryEventId":1,"MatterHistoryAgendaSequence":1,"MatterHistoryMinutesSequence":1,"MatterHistoryAgendaNumber":"sample string 4","MatterHistoryVideo":1,"MatterHistoryVideoIndex":1,"MatterHistoryVersion":"sample string 5","MatterHistoryAgendaNote":"sample string 6","MatterHistoryMinutesNote":"sample string 7","MatterHistoryActionDate":"2024-12-11T17:57:13.9828306-05:00","MatterHistoryActionId":1,"MatterHistoryActionName":"sample string 8","MatterHistoryActionText":"sample string 9","MatterHistoryActionBodyId":1,"MatterHistoryActionBodyName":"sample string 10","MatterHistoryPassedFlag":1,"MatterHistoryPassedFlagName":"sample string 11","MatterHistoryRollCallFlag":1,"MatterHistoryFlagExtra":1,"MatterHistoryTally":"sample string 12","MatterHistoryAccelaRecordId":"sample string 13","MatterHistoryConsent":14,"MatterHistoryMoverId":1,"MatterHistoryMoverName":"sample string 15","MatterHistorySeconderId":1,"MatterHistorySeconderName":"sample string 16","MatterHistoryMatterStatusId":1}\]);

Title: GET v1/{Client}/Matters/{MatterId}/CodeSections/{MatterCodeSectionId}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Matters-MatterId-CodeSections-MatterCodeSectionId

Markdown Content:
Gets one Matter Code Section.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| MatterId |  | integer | Required

 |
| MatterCodeSectionId | The MatterCodeSectionId of the Matter Code Section.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

[GranicusMatterCodeSection](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusMatterCodeSection)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| MatterCodeSectionId |  | integer | None.
 |
| MatterCodeSectionGuid |  | string | None.

 |
| MatterCodeSectionLastModifiedUtc |  | date | None.

 |
| MatterCodeSectionRowVersion |  | Collection of byte | None.

 |
| MatterCodeSectionMatterId |  | integer | Required

 |
| MatterCodeSectionCodeSectionId |  | integer | Required

 |
| MatterCodeSectionNumber |  | string | None.

 |
| MatterCodeSectionName |  | string | None.

 |

### Response Formats

**Sample:**

{
  "MatterCodeSectionId": 1,
  "MatterCodeSectionGuid": "sample string 2",
  "MatterCodeSectionLastModifiedUtc": "2024-12-11T17:57:00.9057706-05:00",
  "MatterCodeSectionRowVersion": "QEA=",
  "MatterCodeSectionMatterId": 4,
  "MatterCodeSectionCodeSectionId": 5,
  "MatterCodeSectionNumber": "sample string 6",
  "MatterCodeSectionName": "sample string 7"
}

**Sample:**

<GranicusMatterCodeSection xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <MatterCodeSectionCodeSectionId\>5</MatterCodeSectionCodeSectionId\>
  <MatterCodeSectionGuid\>sample string 2</MatterCodeSectionGuid\>
  <MatterCodeSectionId\>1</MatterCodeSectionId\>
  <MatterCodeSectionLastModifiedUtc\>2024-12-11T17:57:00.9057706-05:00</MatterCodeSectionLastModifiedUtc\>
  <MatterCodeSectionMatterId\>4</MatterCodeSectionMatterId\>
  <MatterCodeSectionName\>sample string 7</MatterCodeSectionName\>
  <MatterCodeSectionNumber\>sample string 6</MatterCodeSectionNumber\>
  <MatterCodeSectionRowVersion\>QEA=</MatterCodeSectionRowVersion\>
</GranicusMatterCodeSection\>

**Sample:**

({"MatterCodeSectionId":1,"MatterCodeSectionGuid":"sample string 2","MatterCodeSectionLastModifiedUtc":"2024-12-11T17:57:00.9057706-05:00","MatterCodeSectionRowVersion":"QEA=","MatterCodeSectionMatterId":4,"MatterCodeSectionCodeSectionId":5,"MatterCodeSectionNumber":"sample string 6","MatterCodeSectionName":"sample string 7"});

Title: GET v1/{Client}/Matters/{MatterId}/CodeSections

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Matters-MatterId-CodeSections

Markdown Content:
Gets all Matter CodeSections for one Matter record.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| MatterId | The MatterId of the Matter.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusMatterCodeSection](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusMatterCodeSection)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| MatterCodeSectionId |  | integer | None.
 |
| MatterCodeSectionGuid |  | string | None.

 |
| MatterCodeSectionLastModifiedUtc |  | date | None.

 |
| MatterCodeSectionRowVersion |  | Collection of byte | None.

 |
| MatterCodeSectionMatterId |  | integer | Required

 |
| MatterCodeSectionCodeSectionId |  | integer | Required

 |
| MatterCodeSectionNumber |  | string | None.

 |
| MatterCodeSectionName |  | string | None.

 |

### Response Formats

**Sample:**

\[
  {
    "MatterCodeSectionId": 1,
    "MatterCodeSectionGuid": "sample string 2",
    "MatterCodeSectionLastModifiedUtc": "2024-12-11T17:56:46.2144659-05:00",
    "MatterCodeSectionRowVersion": "QEA=",
    "MatterCodeSectionMatterId": 4,
    "MatterCodeSectionCodeSectionId": 5,
    "MatterCodeSectionNumber": "sample string 6",
    "MatterCodeSectionName": "sample string 7"
  },
  {
    "MatterCodeSectionId": 1,
    "MatterCodeSectionGuid": "sample string 2",
    "MatterCodeSectionLastModifiedUtc": "2024-12-11T17:56:46.2144659-05:00",
    "MatterCodeSectionRowVersion": "QEA=",
    "MatterCodeSectionMatterId": 4,
    "MatterCodeSectionCodeSectionId": 5,
    "MatterCodeSectionNumber": "sample string 6",
    "MatterCodeSectionName": "sample string 7"
  }
\]

**Sample:**

<ArrayOfGranicusMatterCodeSection xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusMatterCodeSection\>
    <MatterCodeSectionCodeSectionId\>5</MatterCodeSectionCodeSectionId\>
    <MatterCodeSectionGuid\>sample string 2</MatterCodeSectionGuid\>
    <MatterCodeSectionId\>1</MatterCodeSectionId\>
    <MatterCodeSectionLastModifiedUtc\>2024-12-11T17:56:46.2144659-05:00</MatterCodeSectionLastModifiedUtc\>
    <MatterCodeSectionMatterId\>4</MatterCodeSectionMatterId\>
    <MatterCodeSectionName\>sample string 7</MatterCodeSectionName\>
    <MatterCodeSectionNumber\>sample string 6</MatterCodeSectionNumber\>
    <MatterCodeSectionRowVersion\>QEA=</MatterCodeSectionRowVersion\>
  </GranicusMatterCodeSection\>
  <GranicusMatterCodeSection\>
    <MatterCodeSectionCodeSectionId\>5</MatterCodeSectionCodeSectionId\>
    <MatterCodeSectionGuid\>sample string 2</MatterCodeSectionGuid\>
    <MatterCodeSectionId\>1</MatterCodeSectionId\>
    <MatterCodeSectionLastModifiedUtc\>2024-12-11T17:56:46.2144659-05:00</MatterCodeSectionLastModifiedUtc\>
    <MatterCodeSectionMatterId\>4</MatterCodeSectionMatterId\>
    <MatterCodeSectionName\>sample string 7</MatterCodeSectionName\>
    <MatterCodeSectionNumber\>sample string 6</MatterCodeSectionNumber\>
    <MatterCodeSectionRowVersion\>QEA=</MatterCodeSectionRowVersion\>
  </GranicusMatterCodeSection\>
</ArrayOfGranicusMatterCodeSection\>

**Sample:**

(\[{"MatterCodeSectionId":1,"MatterCodeSectionGuid":"sample string 2","MatterCodeSectionLastModifiedUtc":"2024-12-11T17:56:46.2144659-05:00","MatterCodeSectionRowVersion":"QEA=","MatterCodeSectionMatterId":4,"MatterCodeSectionCodeSectionId":5,"MatterCodeSectionNumber":"sample string 6","MatterCodeSectionName":"sample string 7"},{"MatterCodeSectionId":1,"MatterCodeSectionGuid":"sample string 2","MatterCodeSectionLastModifiedUtc":"2024-12-11T17:56:46.2144659-05:00","MatterCodeSectionRowVersion":"QEA=","MatterCodeSectionMatterId":4,"MatterCodeSectionCodeSectionId":5,"MatterCodeSectionNumber":"sample string 6","MatterCodeSectionName":"sample string 7"}\]);

Title: GET v1/{Client}/Matters/{MatterId}/Attachments/{MatterAttachmentId}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Matters-MatterId-Attachments-MatterAttachmentId

Markdown Content:
Gets one available for Internet viewing Matter Attachment.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| MatterId |  | integer | Required

 |
| MatterAttachmentId | The MatterAttachmentId of the Matter Attachment.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

[GranicusMatterAttachment](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusMatterAttachment)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| MatterAttachmentId |  | integer | None.
 |
| MatterAttachmentGuid |  | string | None.

 |
| MatterAttachmentLastModifiedUtc |  | date | None.

 |
| MatterAttachmentRowVersion |  | Collection of byte | None.

 |
| MatterAttachmentName |  | string | Required

 |
| MatterAttachmentHyperlink |  | string | None.

 |
| MatterAttachmentFileName |  | string | None.

 |
| MatterAttachmentMatterVersion |  | string | None.

 |
| MatterAttachmentIsHyperlink |  | boolean | None.

 |
| MatterAttachmentBinary |  | Collection of byte | None.

 |
| MatterAttachmentIsSupportingDocument |  | boolean | None.

 |
| MatterAttachmentShowOnInternetPage |  | boolean | None.

 |
| MatterAttachmentIsMinuteOrder |  | boolean | None.

 |
| MatterAttachmentIsBoardLetter |  | boolean | None.

 |
| MatterAttachmentAgiloftId |  | integer | None.

 |
| MatterAttachmentDescription |  | string | None.

 |
| MatterAttachmentPrintWithReports |  | boolean | None.

 |
| MatterAttachmentSort |  | integer | None.

 |

### Response Formats

**Sample:**

{
  "MatterAttachmentId": 1,
  "MatterAttachmentGuid": "sample string 2",
  "MatterAttachmentLastModifiedUtc": "2024-12-11T17:56:09.9309142-05:00",
  "MatterAttachmentRowVersion": "QEA=",
  "MatterAttachmentName": "sample string 4",
  "MatterAttachmentHyperlink": "sample string 5",
  "MatterAttachmentFileName": "sample string 6",
  "MatterAttachmentMatterVersion": "sample string 7",
  "MatterAttachmentIsHyperlink": true,
  "MatterAttachmentBinary": "QEA=",
  "MatterAttachmentIsSupportingDocument": true,
  "MatterAttachmentShowOnInternetPage": true,
  "MatterAttachmentIsMinuteOrder": true,
  "MatterAttachmentIsBoardLetter": true,
  "MatterAttachmentAgiloftId": 13,
  "MatterAttachmentDescription": "sample string 14",
  "MatterAttachmentPrintWithReports": true,
  "MatterAttachmentSort": 16
}

**Sample:**

<GranicusMatterAttachment xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <MatterAttachmentAgiloftId\>13</MatterAttachmentAgiloftId\>
  <MatterAttachmentBinary\>QEA=</MatterAttachmentBinary\>
  <MatterAttachmentDescription\>sample string 14</MatterAttachmentDescription\>
  <MatterAttachmentFileName\>sample string 6</MatterAttachmentFileName\>
  <MatterAttachmentGuid\>sample string 2</MatterAttachmentGuid\>
  <MatterAttachmentHyperlink\>sample string 5</MatterAttachmentHyperlink\>
  <MatterAttachmentId\>1</MatterAttachmentId\>
  <MatterAttachmentIsBoardLetter\>true</MatterAttachmentIsBoardLetter\>
  <MatterAttachmentIsHyperlink\>true</MatterAttachmentIsHyperlink\>
  <MatterAttachmentIsMinuteOrder\>true</MatterAttachmentIsMinuteOrder\>
  <MatterAttachmentIsSupportingDocument\>true</MatterAttachmentIsSupportingDocument\>
  <MatterAttachmentLastModifiedUtc\>2024-12-11T17:56:09.9309142-05:00</MatterAttachmentLastModifiedUtc\>
  <MatterAttachmentMatterVersion\>sample string 7</MatterAttachmentMatterVersion\>
  <MatterAttachmentName\>sample string 4</MatterAttachmentName\>
  <MatterAttachmentPrintWithReports\>true</MatterAttachmentPrintWithReports\>
  <MatterAttachmentRowVersion\>QEA=</MatterAttachmentRowVersion\>
  <MatterAttachmentShowOnInternetPage\>true</MatterAttachmentShowOnInternetPage\>
  <MatterAttachmentSort\>16</MatterAttachmentSort\>
</GranicusMatterAttachment\>

**Sample:**

({"MatterAttachmentId":1,"MatterAttachmentGuid":"sample string 2","MatterAttachmentLastModifiedUtc":"2024-12-11T17:56:09.9309142-05:00","MatterAttachmentRowVersion":"QEA=","MatterAttachmentName":"sample string 4","MatterAttachmentHyperlink":"sample string 5","MatterAttachmentFileName":"sample string 6","MatterAttachmentMatterVersion":"sample string 7","MatterAttachmentIsHyperlink":true,"MatterAttachmentBinary":"QEA=","MatterAttachmentIsSupportingDocument":true,"MatterAttachmentShowOnInternetPage":true,"MatterAttachmentIsMinuteOrder":true,"MatterAttachmentIsBoardLetter":true,"MatterAttachmentAgiloftId":13,"MatterAttachmentDescription":"sample string 14","MatterAttachmentPrintWithReports":true,"MatterAttachmentSort":16});

Title: GET v1/{Client}/Matters/{MatterId}/Attachments

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Matters-MatterId-Attachments

Markdown Content:
Gets all available for Internet viewing Matter Attachments for one Matter record.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| MatterId | The MatterId of the Matter.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusMatterAttachment](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusMatterAttachment)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| MatterAttachmentId |  | integer | None.
 |
| MatterAttachmentGuid |  | string | None.

 |
| MatterAttachmentLastModifiedUtc |  | date | None.

 |
| MatterAttachmentRowVersion |  | Collection of byte | None.

 |
| MatterAttachmentName |  | string | Required

 |
| MatterAttachmentHyperlink |  | string | None.

 |
| MatterAttachmentFileName |  | string | None.

 |
| MatterAttachmentMatterVersion |  | string | None.

 |
| MatterAttachmentIsHyperlink |  | boolean | None.

 |
| MatterAttachmentBinary |  | Collection of byte | None.

 |
| MatterAttachmentIsSupportingDocument |  | boolean | None.

 |
| MatterAttachmentShowOnInternetPage |  | boolean | None.

 |
| MatterAttachmentIsMinuteOrder |  | boolean | None.

 |
| MatterAttachmentIsBoardLetter |  | boolean | None.

 |
| MatterAttachmentAgiloftId |  | integer | None.

 |
| MatterAttachmentDescription |  | string | None.

 |
| MatterAttachmentPrintWithReports |  | boolean | None.

 |
| MatterAttachmentSort |  | integer | None.

 |

### Response Formats

**Sample:**

\[
  {
    "MatterAttachmentId": 1,
    "MatterAttachmentGuid": "sample string 2",
    "MatterAttachmentLastModifiedUtc": "2024-12-11T17:56:04.7435838-05:00",
    "MatterAttachmentRowVersion": "QEA=",
    "MatterAttachmentName": "sample string 4",
    "MatterAttachmentHyperlink": "sample string 5",
    "MatterAttachmentFileName": "sample string 6",
    "MatterAttachmentMatterVersion": "sample string 7",
    "MatterAttachmentIsHyperlink": true,
    "MatterAttachmentBinary": "QEA=",
    "MatterAttachmentIsSupportingDocument": true,
    "MatterAttachmentShowOnInternetPage": true,
    "MatterAttachmentIsMinuteOrder": true,
    "MatterAttachmentIsBoardLetter": true,
    "MatterAttachmentAgiloftId": 13,
    "MatterAttachmentDescription": "sample string 14",
    "MatterAttachmentPrintWithReports": true,
    "MatterAttachmentSort": 16
  },
  {
    "MatterAttachmentId": 1,
    "MatterAttachmentGuid": "sample string 2",
    "MatterAttachmentLastModifiedUtc": "2024-12-11T17:56:04.7435838-05:00",
    "MatterAttachmentRowVersion": "QEA=",
    "MatterAttachmentName": "sample string 4",
    "MatterAttachmentHyperlink": "sample string 5",
    "MatterAttachmentFileName": "sample string 6",
    "MatterAttachmentMatterVersion": "sample string 7",
    "MatterAttachmentIsHyperlink": true,
    "MatterAttachmentBinary": "QEA=",
    "MatterAttachmentIsSupportingDocument": true,
    "MatterAttachmentShowOnInternetPage": true,
    "MatterAttachmentIsMinuteOrder": true,
    "MatterAttachmentIsBoardLetter": true,
    "MatterAttachmentAgiloftId": 13,
    "MatterAttachmentDescription": "sample string 14",
    "MatterAttachmentPrintWithReports": true,
    "MatterAttachmentSort": 16
  }
\]

**Sample:**

<ArrayOfGranicusMatterAttachment xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusMatterAttachment\>
    <MatterAttachmentAgiloftId\>13</MatterAttachmentAgiloftId\>
    <MatterAttachmentBinary\>QEA=</MatterAttachmentBinary\>
    <MatterAttachmentDescription\>sample string 14</MatterAttachmentDescription\>
    <MatterAttachmentFileName\>sample string 6</MatterAttachmentFileName\>
    <MatterAttachmentGuid\>sample string 2</MatterAttachmentGuid\>
    <MatterAttachmentHyperlink\>sample string 5</MatterAttachmentHyperlink\>
    <MatterAttachmentId\>1</MatterAttachmentId\>
    <MatterAttachmentIsBoardLetter\>true</MatterAttachmentIsBoardLetter\>
    <MatterAttachmentIsHyperlink\>true</MatterAttachmentIsHyperlink\>
    <MatterAttachmentIsMinuteOrder\>true</MatterAttachmentIsMinuteOrder\>
    <MatterAttachmentIsSupportingDocument\>true</MatterAttachmentIsSupportingDocument\>
    <MatterAttachmentLastModifiedUtc\>2024-12-11T17:56:04.7435838-05:00</MatterAttachmentLastModifiedUtc\>
    <MatterAttachmentMatterVersion\>sample string 7</MatterAttachmentMatterVersion\>
    <MatterAttachmentName\>sample string 4</MatterAttachmentName\>
    <MatterAttachmentPrintWithReports\>true</MatterAttachmentPrintWithReports\>
    <MatterAttachmentRowVersion\>QEA=</MatterAttachmentRowVersion\>
    <MatterAttachmentShowOnInternetPage\>true</MatterAttachmentShowOnInternetPage\>
    <MatterAttachmentSort\>16</MatterAttachmentSort\>
  </GranicusMatterAttachment\>
  <GranicusMatterAttachment\>
    <MatterAttachmentAgiloftId\>13</MatterAttachmentAgiloftId\>
    <MatterAttachmentBinary\>QEA=</MatterAttachmentBinary\>
    <MatterAttachmentDescription\>sample string 14</MatterAttachmentDescription\>
    <MatterAttachmentFileName\>sample string 6</MatterAttachmentFileName\>
    <MatterAttachmentGuid\>sample string 2</MatterAttachmentGuid\>
    <MatterAttachmentHyperlink\>sample string 5</MatterAttachmentHyperlink\>
    <MatterAttachmentId\>1</MatterAttachmentId\>
    <MatterAttachmentIsBoardLetter\>true</MatterAttachmentIsBoardLetter\>
    <MatterAttachmentIsHyperlink\>true</MatterAttachmentIsHyperlink\>
    <MatterAttachmentIsMinuteOrder\>true</MatterAttachmentIsMinuteOrder\>
    <MatterAttachmentIsSupportingDocument\>true</MatterAttachmentIsSupportingDocument\>
    <MatterAttachmentLastModifiedUtc\>2024-12-11T17:56:04.7435838-05:00</MatterAttachmentLastModifiedUtc\>
    <MatterAttachmentMatterVersion\>sample string 7</MatterAttachmentMatterVersion\>
    <MatterAttachmentName\>sample string 4</MatterAttachmentName\>
    <MatterAttachmentPrintWithReports\>true</MatterAttachmentPrintWithReports\>
    <MatterAttachmentRowVersion\>QEA=</MatterAttachmentRowVersion\>
    <MatterAttachmentShowOnInternetPage\>true</MatterAttachmentShowOnInternetPage\>
    <MatterAttachmentSort\>16</MatterAttachmentSort\>
  </GranicusMatterAttachment\>
</ArrayOfGranicusMatterAttachment\>

**Sample:**

(\[{"MatterAttachmentId":1,"MatterAttachmentGuid":"sample string 2","MatterAttachmentLastModifiedUtc":"2024-12-11T17:56:04.7435838-05:00","MatterAttachmentRowVersion":"QEA=","MatterAttachmentName":"sample string 4","MatterAttachmentHyperlink":"sample string 5","MatterAttachmentFileName":"sample string 6","MatterAttachmentMatterVersion":"sample string 7","MatterAttachmentIsHyperlink":true,"MatterAttachmentBinary":"QEA=","MatterAttachmentIsSupportingDocument":true,"MatterAttachmentShowOnInternetPage":true,"MatterAttachmentIsMinuteOrder":true,"MatterAttachmentIsBoardLetter":true,"MatterAttachmentAgiloftId":13,"MatterAttachmentDescription":"sample string 14","MatterAttachmentPrintWithReports":true,"MatterAttachmentSort":16},{"MatterAttachmentId":1,"MatterAttachmentGuid":"sample string 2","MatterAttachmentLastModifiedUtc":"2024-12-11T17:56:04.7435838-05:00","MatterAttachmentRowVersion":"QEA=","MatterAttachmentName":"sample string 4","MatterAttachmentHyperlink":"sample string 5","MatterAttachmentFileName":"sample string 6","MatterAttachmentMatterVersion":"sample string 7","MatterAttachmentIsHyperlink":true,"MatterAttachmentBinary":"QEA=","MatterAttachmentIsSupportingDocument":true,"MatterAttachmentShowOnInternetPage":true,"MatterAttachmentIsMinuteOrder":true,"MatterAttachmentIsBoardLetter":true,"MatterAttachmentAgiloftId":13,"MatterAttachmentDescription":"sample string 14","MatterAttachmentPrintWithReports":true,"MatterAttachmentSort":16}\]);

Title: GET v1/{Client}/Indexes/{IndexId}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Indexes-IndexId

Markdown Content:
Gets one Index.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| IndexId | The Id of the Index.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

[GranicusIndex](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusIndex)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| IndexId |  | integer | None.
 |
| IndexGuid |  | string | None.

 |
| IndexLastModifiedUtc |  | date | None.

 |
| IndexRowVersion |  | Collection of byte | None.

 |
| IndexName |  | string | Required

 |
| IndexActiveFlag |  | integer | None.

 |
| IndexUsedFlag |  | integer | None.

 |
| api\_metadata |  | string | None.

 |

### Response Formats

**Sample:**

{
  "IndexId": 1,
  "IndexGuid": "sample string 2",
  "IndexLastModifiedUtc": "2024-12-11T17:55:37.8721322-05:00",
  "IndexRowVersion": "QEA=",
  "IndexName": "sample string 4",
  "IndexActiveFlag": 5,
  "IndexUsedFlag": 6,
  "api\_metadata": "sample string 7"
}

**Sample:**

<GranicusIndex xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <IndexActiveFlag\>5</IndexActiveFlag\>
  <IndexGuid\>sample string 2</IndexGuid\>
  <IndexId\>1</IndexId\>
  <IndexLastModifiedUtc\>2024-12-11T17:55:37.8721322-05:00</IndexLastModifiedUtc\>
  <IndexName\>sample string 4</IndexName\>
  <IndexRowVersion\>QEA=</IndexRowVersion\>
  <IndexUsedFlag\>6</IndexUsedFlag\>
  <api\_metadata\>sample string 7</api\_metadata\>
</GranicusIndex\>

**Sample:**

({"IndexId":1,"IndexGuid":"sample string 2","IndexLastModifiedUtc":"2024-12-11T17:55:37.8721322-05:00","IndexRowVersion":"QEA=","IndexName":"sample string 4","IndexActiveFlag":5,"IndexUsedFlag":6,"api\_metadata":"sample string 7"});

Title: GET v1/{Client}/Indexes

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Indexes

Markdown Content:
Gets all Indexes.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusIndex](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusIndex)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| IndexId |  | integer | None.
 |
| IndexGuid |  | string | None.

 |
| IndexLastModifiedUtc |  | date | None.

 |
| IndexRowVersion |  | Collection of byte | None.

 |
| IndexName |  | string | Required

 |
| IndexActiveFlag |  | integer | None.

 |
| IndexUsedFlag |  | integer | None.

 |
| api\_metadata |  | string | None.

 |

### Response Formats

**Sample:**

\[
  {
    "IndexId": 1,
    "IndexGuid": "sample string 2",
    "IndexLastModifiedUtc": "2024-12-11T17:55:30.8284355-05:00",
    "IndexRowVersion": "QEA=",
    "IndexName": "sample string 4",
    "IndexActiveFlag": 5,
    "IndexUsedFlag": 6,
    "api\_metadata": "sample string 7"
  },
  {
    "IndexId": 1,
    "IndexGuid": "sample string 2",
    "IndexLastModifiedUtc": "2024-12-11T17:55:30.8284355-05:00",
    "IndexRowVersion": "QEA=",
    "IndexName": "sample string 4",
    "IndexActiveFlag": 5,
    "IndexUsedFlag": 6,
    "api\_metadata": "sample string 7"
  }
\]

**Sample:**

<ArrayOfGranicusIndex xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusIndex\>
    <IndexActiveFlag\>5</IndexActiveFlag\>
    <IndexGuid\>sample string 2</IndexGuid\>
    <IndexId\>1</IndexId\>
    <IndexLastModifiedUtc\>2024-12-11T17:55:30.8284355-05:00</IndexLastModifiedUtc\>
    <IndexName\>sample string 4</IndexName\>
    <IndexRowVersion\>QEA=</IndexRowVersion\>
    <IndexUsedFlag\>6</IndexUsedFlag\>
    <api\_metadata\>sample string 7</api\_metadata\>
  </GranicusIndex\>
  <GranicusIndex\>
    <IndexActiveFlag\>5</IndexActiveFlag\>
    <IndexGuid\>sample string 2</IndexGuid\>
    <IndexId\>1</IndexId\>
    <IndexLastModifiedUtc\>2024-12-11T17:55:30.8284355-05:00</IndexLastModifiedUtc\>
    <IndexName\>sample string 4</IndexName\>
    <IndexRowVersion\>QEA=</IndexRowVersion\>
    <IndexUsedFlag\>6</IndexUsedFlag\>
    <api\_metadata\>sample string 7</api\_metadata\>
  </GranicusIndex\>
</ArrayOfGranicusIndex\>

**Sample:**

(\[{"IndexId":1,"IndexGuid":"sample string 2","IndexLastModifiedUtc":"2024-12-11T17:55:30.8284355-05:00","IndexRowVersion":"QEA=","IndexName":"sample string 4","IndexActiveFlag":5,"IndexUsedFlag":6,"api\_metadata":"sample string 7"},{"IndexId":1,"IndexGuid":"sample string 2","IndexLastModifiedUtc":"2024-12-11T17:55:30.8284355-05:00","IndexRowVersion":"QEA=","IndexName":"sample string 4","IndexActiveFlag":5,"IndexUsedFlag":6,"api\_metadata":"sample string 7"}\]);

Title: GET v1/{Client}/EventDates/{BodyId}?FutureDatesOnly={FutureDatesOnly}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-EventDates-BodyId_FutureDatesOnly

Markdown Content:
Gets Event Dates by BodyID.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| BodyId | The Id of the Body.

 | integer | Required

 |
| FutureDatesOnly | true/false (default = true).

 | boolean | Default value is True

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of date

### Response Formats

**Sample:**

\[
  "2024-12-11T17:55:19.2555191-05:00",
  "2024-12-11T17:55:19.2555191-05:00"
\]

**Sample:**

<ArrayOfNullableOfdateTime xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/System"\>
  <dateTime\>2024-12-11T17:55:19.2555191-05:00</dateTime\>
  <dateTime\>2024-12-11T17:55:19.2555191-05:00</dateTime\>
</ArrayOfNullableOfdateTime\>

**Sample:**

(\["2024-12-11T17:55:19.2555191-05:00","2024-12-11T17:55:19.2555191-05:00"\]);

Title: GET v1/{Client}/Events

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Events

Markdown Content:
Gets all Events.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusEvent](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusEvent)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| EventId |  | integer | None.
 |
| EventGuid |  | string | None.

 |
| EventLastModifiedUtc |  | date | None.

 |
| EventRowVersion |  | Collection of byte | None.

 |
| EventBodyId |  | integer | None.

 |
| EventBodyName |  | string | None.

 |
| EventDate |  | date | Required

 |
| EventTime |  | string | None.

 |
| EventVideoStatus |  | string | None.

 |
| EventAgendaStatusId |  | integer | None.

 |
| EventAgendaStatusName |  | string | None.

 |
| EventMinutesStatusId |  | integer | None.

 |
| EventMinutesStatusName |  | string | None.

 |
| EventLocation |  | string | None.

 |
| EventAgendaFile |  | string | None.

 |
| EventMinutesFile |  | string | None.

 |
| EventAgendaLastPublishedUTC |  | date | None.

 |
| EventMinutesLastPublishedUTC |  | date | None.

 |
| EventComment |  | string | None.

 |
| EventVideoPath |  | string | None.

 |
| EventMedia |  | string | None.

 |
| EventInSiteURL |  | string | None.

 |
| EventItems |  | Collection of [GranicusEventItem](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusEventItem) | None.

 |

### Response Formats

**Sample:**

\[
  {
    "EventId": 1,
    "EventGuid": "sample string 2",
    "EventLastModifiedUtc": "2024-12-11T17:54:58.1491596-05:00",
    "EventRowVersion": "QEA=",
    "EventBodyId": 4,
    "EventBodyName": "sample string 5",
    "EventDate": "2024-12-11T17:54:58.1491596-05:00",
    "EventTime": "sample string 6",
    "EventVideoStatus": "sample string 7",
    "EventAgendaStatusId": 8,
    "EventAgendaStatusName": "sample string 9",
    "EventMinutesStatusId": 10,
    "EventMinutesStatusName": "sample string 11",
    "EventLocation": "sample string 12",
    "EventAgendaFile": "sample string 13",
    "EventMinutesFile": "sample string 14",
    "EventAgendaLastPublishedUTC": "2024-12-11T17:54:58.1491596-05:00",
    "EventMinutesLastPublishedUTC": "2024-12-11T17:54:58.1491596-05:00",
    "EventComment": "sample string 15",
    "EventVideoPath": "sample string 16",
    "EventMedia": "sample string 17",
    "EventInSiteURL": "sample string 18",
    "EventItems": \[
      {
        "EventItemId": 1,
        "EventItemGuid": "sample string 2",
        "EventItemLastModifiedUtc": "2024-12-11T17:54:58.1491596-05:00",
        "EventItemRowVersion": "QEA=",
        "EventItemEventId": 4,
        "EventItemAgendaSequence": 1,
        "EventItemMinutesSequence": 1,
        "EventItemAgendaNumber": "sample string 5",
        "EventItemVideo": 1,
        "EventItemVideoIndex": 1,
        "EventItemVersion": "sample string 6",
        "EventItemAgendaNote": "sample string 7",
        "EventItemMinutesNote": "sample string 8",
        "EventItemActionId": 1,
        "EventItemActionName": "sample string 9",
        "EventItemActionText": "sample string 10",
        "EventItemPassedFlag": 1,
        "EventItemPassedFlagName": "sample string 11",
        "EventItemRollCallFlag": 1,
        "EventItemFlagExtra": 1,
        "EventItemTitle": "sample string 12",
        "EventItemTally": "sample string 13",
        "EventItemAccelaRecordId": "sample string 14",
        "EventItemConsent": 15,
        "EventItemMoverId": 1,
        "EventItemMover": "sample string 16",
        "EventItemSeconderId": 1,
        "EventItemSeconder": "sample string 17",
        "EventItemMatterId": 1,
        "EventItemMatterGuid": "sample string 18",
        "EventItemMatterFile": "sample string 19",
        "EventItemMatterName": "sample string 20",
        "EventItemMatterType": "sample string 21",
        "EventItemMatterStatus": "sample string 22",
        "EventItemMatterAttachments": \[
          {
            "MatterAttachmentId": 1,
            "MatterAttachmentGuid": "sample string 2",
            "MatterAttachmentLastModifiedUtc": "2024-12-11T17:54:58.1491596-05:00",
            "MatterAttachmentRowVersion": "QEA=",
            "MatterAttachmentName": "sample string 4",
            "MatterAttachmentHyperlink": "sample string 5",
            "MatterAttachmentFileName": "sample string 6",
            "MatterAttachmentMatterVersion": "sample string 7",
            "MatterAttachmentIsHyperlink": true,
            "MatterAttachmentBinary": "QEA=",
            "MatterAttachmentIsSupportingDocument": true,
            "MatterAttachmentShowOnInternetPage": true,
            "MatterAttachmentIsMinuteOrder": true,
            "MatterAttachmentIsBoardLetter": true,
            "MatterAttachmentAgiloftId": 13,
            "MatterAttachmentDescription": "sample string 14",
            "MatterAttachmentPrintWithReports": true,
            "MatterAttachmentSort": 16
          },
          {
            "MatterAttachmentId": 1,
            "MatterAttachmentGuid": "sample string 2",
            "MatterAttachmentLastModifiedUtc": "2024-12-11T17:54:58.1491596-05:00",
            "MatterAttachmentRowVersion": "QEA=",
            "MatterAttachmentName": "sample string 4",
            "MatterAttachmentHyperlink": "sample string 5",
            "MatterAttachmentFileName": "sample string 6",
            "MatterAttachmentMatterVersion": "sample string 7",
            "MatterAttachmentIsHyperlink": true,
            "MatterAttachmentBinary": "QEA=",
            "MatterAttachmentIsSupportingDocument": true,
            "MatterAttachmentShowOnInternetPage": true,
            "MatterAttachmentIsMinuteOrder": true,
            "MatterAttachmentIsBoardLetter": true,
            "MatterAttachmentAgiloftId": 13,
            "MatterAttachmentDescription": "sample string 14",
            "MatterAttachmentPrintWithReports": true,
            "MatterAttachmentSort": 16
          }
        \]
      },
      {
        "EventItemId": 1,
        "EventItemGuid": "sample string 2",
        "EventItemLastModifiedUtc": "2024-12-11T17:54:58.1491596-05:00",
        "EventItemRowVersion": "QEA=",
        "EventItemEventId": 4,
        "EventItemAgendaSequence": 1,
        "EventItemMinutesSequence": 1,
        "EventItemAgendaNumber": "sample string 5",
        "EventItemVideo": 1,
        "EventItemVideoIndex": 1,
        "EventItemVersion": "sample string 6",
        "EventItemAgendaNote": "sample string 7",
        "EventItemMinutesNote": "sample string 8",
        "EventItemActionId": 1,
        "EventItemActionName": "sample string 9",
        "EventItemActionText": "sample string 10",
        "EventItemPassedFlag": 1,
        "EventItemPassedFlagName": "sample string 11",
        "EventItemRollCallFlag": 1,
        "EventItemFlagExtra": 1,
        "EventItemTitle": "sample string 12",
        "EventItemTally": "sample string 13",
        "EventItemAccelaRecordId": "sample string 14",
        "EventItemConsent": 15,
        "EventItemMoverId": 1,
        "EventItemMover": "sample string 16",
        "EventItemSeconderId": 1,
        "EventItemSeconder": "sample string 17",
        "EventItemMatterId": 1,
        "EventItemMatterGuid": "sample string 18",
        "EventItemMatterFile": "sample string 19",
        "EventItemMatterName": "sample string 20",
        "EventItemMatterType": "sample string 21",
        "EventItemMatterStatus": "sample string 22",
        "EventItemMatterAttachments": \[
          {
            "MatterAttachmentId": 1,
            "MatterAttachmentGuid": "sample string 2",
            "MatterAttachmentLastModifiedUtc": "2024-12-11T17:54:58.1491596-05:00",
            "MatterAttachmentRowVersion": "QEA=",
            "MatterAttachmentName": "sample string 4",
            "MatterAttachmentHyperlink": "sample string 5",
            "MatterAttachmentFileName": "sample string 6",
            "MatterAttachmentMatterVersion": "sample string 7",
            "MatterAttachmentIsHyperlink": true,
            "MatterAttachmentBinary": "QEA=",
            "MatterAttachmentIsSupportingDocument": true,
            "MatterAttachmentShowOnInternetPage": true,
            "MatterAttachmentIsMinuteOrder": true,
            "MatterAttachmentIsBoardLetter": true,
            "MatterAttachmentAgiloftId": 13,
            "MatterAttachmentDescription": "sample string 14",
            "MatterAttachmentPrintWithReports": true,
            "MatterAttachmentSort": 16
          },
          {
            "MatterAttachmentId": 1,
            "MatterAttachmentGuid": "sample string 2",
            "MatterAttachmentLastModifiedUtc": "2024-12-11T17:54:58.1491596-05:00",
            "MatterAttachmentRowVersion": "QEA=",
            "MatterAttachmentName": "sample string 4",
            "MatterAttachmentHyperlink": "sample string 5",
            "MatterAttachmentFileName": "sample string 6",
            "MatterAttachmentMatterVersion": "sample string 7",
            "MatterAttachmentIsHyperlink": true,
            "MatterAttachmentBinary": "QEA=",
            "MatterAttachmentIsSupportingDocument": true,
            "MatterAttachmentShowOnInternetPage": true,
            "MatterAttachmentIsMinuteOrder": true,
            "MatterAttachmentIsBoardLetter": true,
            "MatterAttachmentAgiloftId": 13,
            "MatterAttachmentDescription": "sample string 14",
            "MatterAttachmentPrintWithReports": true,
            "MatterAttachmentSort": 16
          }
        \]
      }
    \]
  },
  {
    "EventId": 1,
    "EventGuid": "sample string 2",
    "EventLastModifiedUtc": "2024-12-11T17:54:58.1491596-05:00",
    "EventRowVersion": "QEA=",
    "EventBodyId": 4,
    "EventBodyName": "sample string 5",
    "EventDate": "2024-12-11T17:54:58.1491596-05:00",
    "EventTime": "sample string 6",
    "EventVideoStatus": "sample string 7",
    "EventAgendaStatusId": 8,
    "EventAgendaStatusName": "sample string 9",
    "EventMinutesStatusId": 10,
    "EventMinutesStatusName": "sample string 11",
    "EventLocation": "sample string 12",
    "EventAgendaFile": "sample string 13",
    "EventMinutesFile": "sample string 14",
    "EventAgendaLastPublishedUTC": "2024-12-11T17:54:58.1491596-05:00",
    "EventMinutesLastPublishedUTC": "2024-12-11T17:54:58.1491596-05:00",
    "EventComment": "sample string 15",
    "EventVideoPath": "sample string 16",
    "EventMedia": "sample string 17",
    "EventInSiteURL": "sample string 18",
    "EventItems": \[
      {
        "EventItemId": 1,
        "EventItemGuid": "sample string 2",
        "EventItemLastModifiedUtc": "2024-12-11T17:54:58.1491596-05:00",
        "EventItemRowVersion": "QEA=",
        "EventItemEventId": 4,
        "EventItemAgendaSequence": 1,
        "EventItemMinutesSequence": 1,
        "EventItemAgendaNumber": "sample string 5",
        "EventItemVideo": 1,
        "EventItemVideoIndex": 1,
        "EventItemVersion": "sample string 6",
        "EventItemAgendaNote": "sample string 7",
        "EventItemMinutesNote": "sample string 8",
        "EventItemActionId": 1,
        "EventItemActionName": "sample string 9",
        "EventItemActionText": "sample string 10",
        "EventItemPassedFlag": 1,
        "EventItemPassedFlagName": "sample string 11",
        "EventItemRollCallFlag": 1,
        "EventItemFlagExtra": 1,
        "EventItemTitle": "sample string 12",
        "EventItemTally": "sample string 13",
        "EventItemAccelaRecordId": "sample string 14",
        "EventItemConsent": 15,
        "EventItemMoverId": 1,
        "EventItemMover": "sample string 16",
        "EventItemSeconderId": 1,
        "EventItemSeconder": "sample string 17",
        "EventItemMatterId": 1,
        "EventItemMatterGuid": "sample string 18",
        "EventItemMatterFile": "sample string 19",
        "EventItemMatterName": "sample string 20",
        "EventItemMatterType": "sample string 21",
        "EventItemMatterStatus": "sample string 22",
        "EventItemMatterAttachments": \[
          {
            "MatterAttachmentId": 1,
            "MatterAttachmentGuid": "sample string 2",
            "MatterAttachmentLastModifiedUtc": "2024-12-11T17:54:58.1491596-05:00",
            "MatterAttachmentRowVersion": "QEA=",
            "MatterAttachmentName": "sample string 4",
            "MatterAttachmentHyperlink": "sample string 5",
            "MatterAttachmentFileName": "sample string 6",
            "MatterAttachmentMatterVersion": "sample string 7",
            "MatterAttachmentIsHyperlink": true,
            "MatterAttachmentBinary": "QEA=",
            "MatterAttachmentIsSupportingDocument": true,
            "MatterAttachmentShowOnInternetPage": true,
            "MatterAttachmentIsMinuteOrder": true,
            "MatterAttachmentIsBoardLetter": true,
            "MatterAttachmentAgiloftId": 13,
            "MatterAttachmentDescription": "sample string 14",
            "MatterAttachmentPrintWithReports": true,
            "MatterAttachmentSort": 16
          },
          {
            "MatterAttachmentId": 1,
            "MatterAttachmentGuid": "sample string 2",
            "MatterAttachmentLastModifiedUtc": "2024-12-11T17:54:58.1491596-05:00",
            "MatterAttachmentRowVersion": "QEA=",
            "MatterAttachmentName": "sample string 4",
            "MatterAttachmentHyperlink": "sample string 5",
            "MatterAttachmentFileName": "sample string 6",
            "MatterAttachmentMatterVersion": "sample string 7",
            "MatterAttachmentIsHyperlink": true,
            "MatterAttachmentBinary": "QEA=",
            "MatterAttachmentIsSupportingDocument": true,
            "MatterAttachmentShowOnInternetPage": true,
            "MatterAttachmentIsMinuteOrder": true,
            "MatterAttachmentIsBoardLetter": true,
            "MatterAttachmentAgiloftId": 13,
            "MatterAttachmentDescription": "sample string 14",
            "MatterAttachmentPrintWithReports": true,
            "MatterAttachmentSort": 16
          }
        \]
      },
      {
        "EventItemId": 1,
        "EventItemGuid": "sample string 2",
        "EventItemLastModifiedUtc": "2024-12-11T17:54:58.1491596-05:00",
        "EventItemRowVersion": "QEA=",
        "EventItemEventId": 4,
        "EventItemAgendaSequence": 1,
        "EventItemMinutesSequence": 1,
        "EventItemAgendaNumber": "sample string 5",
        "EventItemVideo": 1,
        "EventItemVideoIndex": 1,
        "EventItemVersion": "sample string 6",
        "EventItemAgendaNote": "sample string 7",
        "EventItemMinutesNote": "sample string 8",
        "EventItemActionId": 1,
        "EventItemActionName": "sample string 9",
        "EventItemActionText": "sample string 10",
        "EventItemPassedFlag": 1,
        "EventItemPassedFlagName": "sample string 11",
        "EventItemRollCallFlag": 1,
        "EventItemFlagExtra": 1,
        "EventItemTitle": "sample string 12",
        "EventItemTally": "sample string 13",
        "EventItemAccelaRecordId": "sample string 14",
        "EventItemConsent": 15,
        "EventItemMoverId": 1,
        "EventItemMover": "sample string 16",
        "EventItemSeconderId": 1,
        "EventItemSeconder": "sample string 17",
        "EventItemMatterId": 1,
        "EventItemMatterGuid": "sample string 18",
        "EventItemMatterFile": "sample string 19",
        "EventItemMatterName": "sample string 20",
        "EventItemMatterType": "sample string 21",
        "EventItemMatterStatus": "sample string 22",
        "EventItemMatterAttachments": \[
          {
            "MatterAttachmentId": 1,
            "MatterAttachmentGuid": "sample string 2",
            "MatterAttachmentLastModifiedUtc": "2024-12-11T17:54:58.1491596-05:00",
            "MatterAttachmentRowVersion": "QEA=",
            "MatterAttachmentName": "sample string 4",
            "MatterAttachmentHyperlink": "sample string 5",
            "MatterAttachmentFileName": "sample string 6",
            "MatterAttachmentMatterVersion": "sample string 7",
            "MatterAttachmentIsHyperlink": true,
            "MatterAttachmentBinary": "QEA=",
            "MatterAttachmentIsSupportingDocument": true,
            "MatterAttachmentShowOnInternetPage": true,
            "MatterAttachmentIsMinuteOrder": true,
            "MatterAttachmentIsBoardLetter": true,
            "MatterAttachmentAgiloftId": 13,
            "MatterAttachmentDescription": "sample string 14",
            "MatterAttachmentPrintWithReports": true,
            "MatterAttachmentSort": 16
          },
          {
            "MatterAttachmentId": 1,
            "MatterAttachmentGuid": "sample string 2",
            "MatterAttachmentLastModifiedUtc": "2024-12-11T17:54:58.1491596-05:00",
            "MatterAttachmentRowVersion": "QEA=",
            "MatterAttachmentName": "sample string 4",
            "MatterAttachmentHyperlink": "sample string 5",
            "MatterAttachmentFileName": "sample string 6",
            "MatterAttachmentMatterVersion": "sample string 7",
            "MatterAttachmentIsHyperlink": true,
            "MatterAttachmentBinary": "QEA=",
            "MatterAttachmentIsSupportingDocument": true,
            "MatterAttachmentShowOnInternetPage": true,
            "MatterAttachmentIsMinuteOrder": true,
            "MatterAttachmentIsBoardLetter": true,
            "MatterAttachmentAgiloftId": 13,
            "MatterAttachmentDescription": "sample string 14",
            "MatterAttachmentPrintWithReports": true,
            "MatterAttachmentSort": 16
          }
        \]
      }
    \]
  }
\]

**Sample:**

<ArrayOfGranicusEvent xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusEvent\>
    <EventAgendaFile\>sample string 13</EventAgendaFile\>
    <EventAgendaLastPublishedUTC\>2024-12-11T17:54:58.1491596-05:00</EventAgendaLastPublishedUTC\>
    <EventAgendaStatusId\>8</EventAgendaStatusId\>
    <EventAgendaStatusName\>sample string 9</EventAgendaStatusName\>
    <EventBodyId\>4</EventBodyId\>
    <EventBodyName\>sample string 5</EventBodyName\>
    <EventComment\>sample string 15</EventComment\>
    <EventDate\>2024-12-11T17:54:58.1491596-05:00</EventDate\>
    <EventGuid\>sample string 2</EventGuid\>
    <EventId\>1</EventId\>
    <EventInSiteURL\>sample string 18</EventInSiteURL\>
    <EventItems\>
      <GranicusEventItem\>
        <EventItemAccelaRecordId\>sample string 14</EventItemAccelaRecordId\>
        <EventItemActionId\>1</EventItemActionId\>
        <EventItemActionName\>sample string 9</EventItemActionName\>
        <EventItemActionText\>sample string 10</EventItemActionText\>
        <EventItemAgendaNote\>sample string 7</EventItemAgendaNote\>
        <EventItemAgendaNumber\>sample string 5</EventItemAgendaNumber\>
        <EventItemAgendaSequence\>1</EventItemAgendaSequence\>
        <EventItemConsent\>15</EventItemConsent\>
        <EventItemEventId\>4</EventItemEventId\>
        <EventItemFlagExtra\>1</EventItemFlagExtra\>
        <EventItemGuid\>sample string 2</EventItemGuid\>
        <EventItemId\>1</EventItemId\>
        <EventItemLastModifiedUtc\>2024-12-11T17:54:58.1491596-05:00</EventItemLastModifiedUtc\>
        <EventItemMatterAttachments\>
          <GranicusMatterAttachment\>
            <MatterAttachmentAgiloftId\>13</MatterAttachmentAgiloftId\>
            <MatterAttachmentBinary\>QEA=</MatterAttachmentBinary\>
            <MatterAttachmentDescription\>sample string 14</MatterAttachmentDescription\>
            <MatterAttachmentFileName\>sample string 6</MatterAttachmentFileName\>
            <MatterAttachmentGuid\>sample string 2</MatterAttachmentGuid\>
            <MatterAttachmentHyperlink\>sample string 5</MatterAttachmentHyperlink\>
            <MatterAttachmentId\>1</MatterAttachmentId\>
            <MatterAttachmentIsBoardLetter\>true</MatterAttachmentIsBoardLetter\>
            <MatterAttachmentIsHyperlink\>true</MatterAttachmentIsHyperlink\>
            <MatterAttachmentIsMinuteOrder\>true</MatterAttachmentIsMinuteOrder\>
            <MatterAttachmentIsSupportingDocument\>true</MatterAttachmentIsSupportingDocument\>
            <MatterAttachmentLastModifiedUtc\>2024-12-11T17:54:58.1491596-05:00</MatterAttachmentLastModifiedUtc\>
            <MatterAttachmentMatterVersion\>sample string 7</MatterAttachmentMatterVersion\>
            <MatterAttachmentName\>sample string 4</MatterAttachmentName\>
            <MatterAttachmentPrintWithReports\>true</MatterAttachmentPrintWithReports\>
            <MatterAttachmentRowVersion\>QEA=</MatterAttachmentRowVersion\>
            <MatterAttachmentShowOnInternetPage\>true</MatterAttachmentShowOnInternetPage\>
            <MatterAttachmentSort\>16</MatterAttachmentSort\>
          </GranicusMatterAttachment\>
          <GranicusMatterAttachment\>
            <MatterAttachmentAgiloftId\>13</MatterAttachmentAgiloftId\>
            <MatterAttachmentBinary\>QEA=</MatterAttachmentBinary\>
            <MatterAttachmentDescription\>sample string 14</MatterAttachmentDescription\>
            <MatterAttachmentFileName\>sample string 6</MatterAttachmentFileName\>
            <MatterAttachmentGuid\>sample string 2</MatterAttachmentGuid\>
            <MatterAttachmentHyperlink\>sample string 5</MatterAttachmentHyperlink\>
            <MatterAttachmentId\>1</MatterAttachmentId\>
            <MatterAttachmentIsBoardLetter\>true</MatterAttachmentIsBoardLetter\>
            <MatterAttachmentIsHyperlink\>true</MatterAttachmentIsHyperlink\>
            <MatterAttachmentIsMinuteOrder\>true</MatterAttachmentIsMinuteOrder\>
            <MatterAttachmentIsSupportingDocument\>true</MatterAttachmentIsSupportingDocument\>
            <MatterAttachmentLastModifiedUtc\>2024-12-11T17:54:58.1491596-05:00</MatterAttachmentLastModifiedUtc\>
            <MatterAttachmentMatterVersion\>sample string 7</MatterAttachmentMatterVersion\>
            <MatterAttachmentName\>sample string 4</MatterAttachmentName\>
            <MatterAttachmentPrintWithReports\>true</MatterAttachmentPrintWithReports\>
            <MatterAttachmentRowVersion\>QEA=</MatterAttachmentRowVersion\>
            <MatterAttachmentShowOnInternetPage\>true</MatterAttachmentShowOnInternetPage\>
            <MatterAttachmentSort\>16</MatterAttachmentSort\>
          </GranicusMatterAttachment\>
        </EventItemMatterAttachments\>
        <EventItemMatterFile\>sample string 19</EventItemMatterFile\>
        <EventItemMatterGuid\>sample string 18</EventItemMatterGuid\>
        <EventItemMatterId\>1</EventItemMatterId\>
        <EventItemMatterName\>sample string 20</EventItemMatterName\>
        <EventItemMatterStatus\>sample string 22</EventItemMatterStatus\>
        <EventItemMatterType\>sample string 21</EventItemMatterType\>
        <EventItemMinutesNote\>sample string 8</EventItemMinutesNote\>
        <EventItemMinutesSequence\>1</EventItemMinutesSequence\>
        <EventItemMover\>sample string 16</EventItemMover\>
        <EventItemMoverId\>1</EventItemMoverId\>
        <EventItemPassedFlag\>1</EventItemPassedFlag\>
        <EventItemPassedFlagName\>sample string 11</EventItemPassedFlagName\>
        <EventItemRollCallFlag\>1</EventItemRollCallFlag\>
        <EventItemRowVersion\>QEA=</EventItemRowVersion\>
        <EventItemSeconder\>sample string 17</EventItemSeconder\>
        <EventItemSeconderId\>1</EventItemSeconderId\>
        <EventItemTally\>sample string 13</EventItemTally\>
        <EventItemTitle\>sample string 12</EventItemTitle\>
        <EventItemVersion\>sample string 6</EventItemVersion\>
        <EventItemVideo\>1</EventItemVideo\>
        <EventItemVideoIndex\>1</EventItemVideoIndex\>
      </GranicusEventItem\>
      <GranicusEventItem\>
        <EventItemAccelaRecordId\>sample string 14</EventItemAccelaRecordId\>
        <EventItemActionId\>1</EventItemActionId\>
        <EventItemActionName\>sample string 9</EventItemActionName\>
        <EventItemActionText\>sample string 10</EventItemActionText\>
        <EventItemAgendaNote\>sample string 7</EventItemAgendaNote\>
        <EventItemAgendaNumber\>sample string 5</EventItemAgendaNumber\>
        <EventItemAgendaSequence\>1</EventItemAgendaSequence\>
        <EventItemConsent\>15</EventItemConsent\>
        <EventItemEventId\>4</EventItemEventId\>
        <EventItemFlagExtra\>1</EventItemFlagExtra\>
        <EventItemGuid\>sample string 2</EventItemGuid\>
        <EventItemId\>1</EventItemId\>
        <EventItemLastModifiedUtc\>2024-12-11T17:54:58.1491596-05:00</EventItemLastModifiedUtc\>
        <EventItemMatterAttachments\>
          <GranicusMatterAttachment\>
            <MatterAttachmentAgiloftId\>13</MatterAttachmentAgiloftId\>
            <MatterAttachmentBinary\>QEA=</MatterAttachmentBinary\>
            <MatterAttachmentDescription\>sample string 14</MatterAttachmentDescription\>
            <MatterAttachmentFileName\>sample string 6</MatterAttachmentFileName\>
            <MatterAttachmentGuid\>sample string 2</MatterAttachmentGuid\>
            <MatterAttachmentHyperlink\>sample string 5</MatterAttachmentHyperlink\>
            <MatterAttachmentId\>1</MatterAttachmentId\>
            <MatterAttachmentIsBoardLetter\>true</MatterAttachmentIsBoardLetter\>
            <MatterAttachmentIsHyperlink\>true</MatterAttachmentIsHyperlink\>
            <MatterAttachmentIsMinuteOrder\>true</MatterAttachmentIsMinuteOrder\>
            <MatterAttachmentIsSupportingDocument\>true</MatterAttachmentIsSupportingDocument\>
            <MatterAttachmentLastModifiedUtc\>2024-12-11T17:54:58.1491596-05:00</MatterAttachmentLastModifiedUtc\>
            <MatterAttachmentMatterVersion\>sample string 7</MatterAttachmentMatterVersion\>
            <MatterAttachmentName\>sample string 4</MatterAttachmentName\>
            <MatterAttachmentPrintWithReports\>true</MatterAttachmentPrintWithReports\>
            <MatterAttachmentRowVersion\>QEA=</MatterAttachmentRowVersion\>
            <MatterAttachmentShowOnInternetPage\>true</MatterAttachmentShowOnInternetPage\>
            <MatterAttachmentSort\>16</MatterAttachmentSort\>
          </GranicusMatterAttachment\>
          <GranicusMatterAttachment\>
            <MatterAttachmentAgiloftId\>13</MatterAttachmentAgiloftId\>
            <MatterAttachmentBinary\>QEA=</MatterAttachmentBinary\>
            <MatterAttachmentDescription\>sample string 14</MatterAttachmentDescription\>
            <MatterAttachmentFileName\>sample string 6</MatterAttachmentFileName\>
            <MatterAttachmentGuid\>sample string 2</MatterAttachmentGuid\>
            <MatterAttachmentHyperlink\>sample string 5</MatterAttachmentHyperlink\>
            <MatterAttachmentId\>1</MatterAttachmentId\>
            <MatterAttachmentIsBoardLetter\>true</MatterAttachmentIsBoardLetter\>
            <MatterAttachmentIsHyperlink\>true</MatterAttachmentIsHyperlink\>
            <MatterAttachmentIsMinuteOrder\>true</MatterAttachmentIsMinuteOrder\>
            <MatterAttachmentIsSupportingDocument\>true</MatterAttachmentIsSupportingDocument\>
            <MatterAttachmentLastModifiedUtc\>2024-12-11T17:54:58.1491596-05:00</MatterAttachmentLastModifiedUtc\>
            <MatterAttachmentMatterVersion\>sample string 7</MatterAttachmentMatterVersion\>
            <MatterAttachmentName\>sample string 4</MatterAttachmentName\>
            <MatterAttachmentPrintWithReports\>true</MatterAttachmentPrintWithReports\>
            <MatterAttachmentRowVersion\>QEA=</MatterAttachmentRowVersion\>
            <MatterAttachmentShowOnInternetPage\>true</MatterAttachmentShowOnInternetPage\>
            <MatterAttachmentSort\>16</MatterAttachmentSort\>
          </GranicusMatterAttachment\>
        </EventItemMatterAttachments\>
        <EventItemMatterFile\>sample string 19</EventItemMatterFile\>
        <EventItemMatterGuid\>sample string 18</EventItemMatterGuid\>
        <EventItemMatterId\>1</EventItemMatterId\>
        <EventItemMatterName\>sample string 20</EventItemMatterName\>
        <EventItemMatterStatus\>sample string 22</EventItemMatterStatus\>
        <EventItemMatterType\>sample string 21</EventItemMatterType\>
        <EventItemMinutesNote\>sample string 8</EventItemMinutesNote\>
        <EventItemMinutesSequence\>1</EventItemMinutesSequence\>
        <EventItemMover\>sample string 16</EventItemMover\>
        <EventItemMoverId\>1</EventItemMoverId\>
        <EventItemPassedFlag\>1</EventItemPassedFlag\>
        <EventItemPassedFlagName\>sample string 11</EventItemPassedFlagName\>
        <EventItemRollCallFlag\>1</EventItemRollCallFlag\>
        <EventItemRowVersion\>QEA=</EventItemRowVersion\>
        <EventItemSeconder\>sample string 17</EventItemSeconder\>
        <EventItemSeconderId\>1</EventItemSeconderId\>
        <EventItemTally\>sample string 13</EventItemTally\>
        <EventItemTitle\>sample string 12</EventItemTitle\>
        <EventItemVersion\>sample string 6</EventItemVersion\>
        <EventItemVideo\>1</EventItemVideo\>
        <EventItemVideoIndex\>1</EventItemVideoIndex\>
      </GranicusEventItem\>
    </EventItems\>
    <EventLastModifiedUtc\>2024-12-11T17:54:58.1491596-05:00</EventLastModifiedUtc\>
    <EventLocation\>sample string 12</EventLocation\>
    <EventMedia\>sample string 17</EventMedia\>
    <EventMinutesFile\>sample string 14</EventMinutesFile\>
    <EventMinutesLastPublishedUTC\>2024-12-11T17:54:58.1491596-05:00</EventMinutesLastPublishedUTC\>
    <EventMinutesStatusId\>10</EventMinutesStatusId\>
    <EventMinutesStatusName\>sample string 11</EventMinutesStatusName\>
    <EventRowVersion\>QEA=</EventRowVersion\>
    <EventTime\>sample string 6</EventTime\>
    <EventVideoPath\>sample string 16</EventVideoPath\>
    <EventVideoStatus\>sample string 7</EventVideoStatus\>
  </GranicusEvent\>
  <GranicusEvent\>
    <EventAgendaFile\>sample string 13</EventAgendaFile\>
    <EventAgendaLastPublishedUTC\>2024-12-11T17:54:58.1491596-05:00</EventAgendaLastPublishedUTC\>
    <EventAgendaStatusId\>8</EventAgendaStatusId\>
    <EventAgendaStatusName\>sample string 9</EventAgendaStatusName\>
    <EventBodyId\>4</EventBodyId\>
    <EventBodyName\>sample string 5</EventBodyName\>
    <EventComment\>sample string 15</EventComment\>
    <EventDate\>2024-12-11T17:54:58.1491596-05:00</EventDate\>
    <EventGuid\>sample string 2</EventGuid\>
    <EventId\>1</EventId\>
    <EventInSiteURL\>sample string 18</EventInSiteURL\>
    <EventItems\>
      <GranicusEventItem\>
        <EventItemAccelaRecordId\>sample string 14</EventItemAccelaRecordId\>
        <EventItemActionId\>1</EventItemActionId\>
        <EventItemActionName\>sample string 9</EventItemActionName\>
        <EventItemActionText\>sample string 10</EventItemActionText\>
        <EventItemAgendaNote\>sample string 7</EventItemAgendaNote\>
        <EventItemAgendaNumber\>sample string 5</EventItemAgendaNumber\>
        <EventItemAgendaSequence\>1</EventItemAgendaSequence\>
        <EventItemConsent\>15</EventItemConsent\>
        <EventItemEventId\>4</EventItemEventId\>
        <EventItemFlagExtra\>1</EventItemFlagExtra\>
        <EventItemGuid\>sample string 2</EventItemGuid\>
        <EventItemId\>1</EventItemId\>
        <EventItemLastModifiedUtc\>2024-12-11T17:54:58.1491596-05:00</EventItemLastModifiedUtc\>
        <EventItemMatterAttachments\>
          <GranicusMatterAttachment\>
            <MatterAttachmentAgiloftId\>13</MatterAttachmentAgiloftId\>
            <MatterAttachmentBinary\>QEA=</MatterAttachmentBinary\>
            <MatterAttachmentDescription\>sample string 14</MatterAttachmentDescription\>
            <MatterAttachmentFileName\>sample string 6</MatterAttachmentFileName\>
            <MatterAttachmentGuid\>sample string 2</MatterAttachmentGuid\>
            <MatterAttachmentHyperlink\>sample string 5</MatterAttachmentHyperlink\>
            <MatterAttachmentId\>1</MatterAttachmentId\>
            <MatterAttachmentIsBoardLetter\>true</MatterAttachmentIsBoardLetter\>
            <MatterAttachmentIsHyperlink\>true</MatterAttachmentIsHyperlink\>
            <MatterAttachmentIsMinuteOrder\>true</MatterAttachmentIsMinuteOrder\>
            <MatterAttachmentIsSupportingDocument\>true</MatterAttachmentIsSupportingDocument\>
            <MatterAttachmentLastModifiedUtc\>2024-12-11T17:54:58.1491596-05:00</MatterAttachmentLastModifiedUtc\>
            <MatterAttachmentMatterVersion\>sample string 7</MatterAttachmentMatterVersion\>
            <MatterAttachmentName\>sample string 4</MatterAttachmentName\>
            <MatterAttachmentPrintWithReports\>true</MatterAttachmentPrintWithReports\>
            <MatterAttachmentRowVersion\>QEA=</MatterAttachmentRowVersion\>
            <MatterAttachmentShowOnInternetPage\>true</MatterAttachmentShowOnInternetPage\>
            <MatterAttachmentSort\>16</MatterAttachmentSort\>
          </GranicusMatterAttachment\>
          <GranicusMatterAttachment\>
            <MatterAttachmentAgiloftId\>13</MatterAttachmentAgiloftId\>
            <MatterAttachmentBinary\>QEA=</MatterAttachmentBinary\>
            <MatterAttachmentDescription\>sample string 14</MatterAttachmentDescription\>
            <MatterAttachmentFileName\>sample string 6</MatterAttachmentFileName\>
            <MatterAttachmentGuid\>sample string 2</MatterAttachmentGuid\>
            <MatterAttachmentHyperlink\>sample string 5</MatterAttachmentHyperlink\>
            <MatterAttachmentId\>1</MatterAttachmentId\>
            <MatterAttachmentIsBoardLetter\>true</MatterAttachmentIsBoardLetter\>
            <MatterAttachmentIsHyperlink\>true</MatterAttachmentIsHyperlink\>
            <MatterAttachmentIsMinuteOrder\>true</MatterAttachmentIsMinuteOrder\>
            <MatterAttachmentIsSupportingDocument\>true</MatterAttachmentIsSupportingDocument\>
            <MatterAttachmentLastModifiedUtc\>2024-12-11T17:54:58.1491596-05:00</MatterAttachmentLastModifiedUtc\>
            <MatterAttachmentMatterVersion\>sample string 7</MatterAttachmentMatterVersion\>
            <MatterAttachmentName\>sample string 4</MatterAttachmentName\>
            <MatterAttachmentPrintWithReports\>true</MatterAttachmentPrintWithReports\>
            <MatterAttachmentRowVersion\>QEA=</MatterAttachmentRowVersion\>
            <MatterAttachmentShowOnInternetPage\>true</MatterAttachmentShowOnInternetPage\>
            <MatterAttachmentSort\>16</MatterAttachmentSort\>
          </GranicusMatterAttachment\>
        </EventItemMatterAttachments\>
        <EventItemMatterFile\>sample string 19</EventItemMatterFile\>
        <EventItemMatterGuid\>sample string 18</EventItemMatterGuid\>
        <EventItemMatterId\>1</EventItemMatterId\>
        <EventItemMatterName\>sample string 20</EventItemMatterName\>
        <EventItemMatterStatus\>sample string 22</EventItemMatterStatus\>
        <EventItemMatterType\>sample string 21</EventItemMatterType\>
        <EventItemMinutesNote\>sample string 8</EventItemMinutesNote\>
        <EventItemMinutesSequence\>1</EventItemMinutesSequence\>
        <EventItemMover\>sample string 16</EventItemMover\>
        <EventItemMoverId\>1</EventItemMoverId\>
        <EventItemPassedFlag\>1</EventItemPassedFlag\>
        <EventItemPassedFlagName\>sample string 11</EventItemPassedFlagName\>
        <EventItemRollCallFlag\>1</EventItemRollCallFlag\>
        <EventItemRowVersion\>QEA=</EventItemRowVersion\>
        <EventItemSeconder\>sample string 17</EventItemSeconder\>
        <EventItemSeconderId\>1</EventItemSeconderId\>
        <EventItemTally\>sample string 13</EventItemTally\>
        <EventItemTitle\>sample string 12</EventItemTitle\>
        <EventItemVersion\>sample string 6</EventItemVersion\>
        <EventItemVideo\>1</EventItemVideo\>
        <EventItemVideoIndex\>1</EventItemVideoIndex\>
      </GranicusEventItem\>
      <GranicusEventItem\>
        <EventItemAccelaRecordId\>sample string 14</EventItemAccelaRecordId\>
        <EventItemActionId\>1</EventItemActionId\>
        <EventItemActionName\>sample string 9</EventItemActionName\>
        <EventItemActionText\>sample string 10</EventItemActionText\>
        <EventItemAgendaNote\>sample string 7</EventItemAgendaNote\>
        <EventItemAgendaNumber\>sample string 5</EventItemAgendaNumber\>
        <EventItemAgendaSequence\>1</EventItemAgendaSequence\>
        <EventItemConsent\>15</EventItemConsent\>
        <EventItemEventId\>4</EventItemEventId\>
        <EventItemFlagExtra\>1</EventItemFlagExtra\>
        <EventItemGuid\>sample string 2</EventItemGuid\>
        <EventItemId\>1</EventItemId\>
        <EventItemLastModifiedUtc\>2024-12-11T17:54:58.1491596-05:00</EventItemLastModifiedUtc\>
        <EventItemMatterAttachments\>
          <GranicusMatterAttachment\>
            <MatterAttachmentAgiloftId\>13</MatterAttachmentAgiloftId\>
            <MatterAttachmentBinary\>QEA=</MatterAttachmentBinary\>
            <MatterAttachmentDescription\>sample string 14</MatterAttachmentDescription\>
            <MatterAttachmentFileName\>sample string 6</MatterAttachmentFileName\>
            <MatterAttachmentGuid\>sample string 2</MatterAttachmentGuid\>
            <MatterAttachmentHyperlink\>sample string 5</MatterAttachmentHyperlink\>
            <MatterAttachmentId\>1</MatterAttachmentId\>
            <MatterAttachmentIsBoardLetter\>true</MatterAttachmentIsBoardLetter\>
            <MatterAttachmentIsHyperlink\>true</MatterAttachmentIsHyperlink\>
            <MatterAttachmentIsMinuteOrder\>true</MatterAttachmentIsMinuteOrder\>
            <MatterAttachmentIsSupportingDocument\>true</MatterAttachmentIsSupportingDocument\>
            <MatterAttachmentLastModifiedUtc\>2024-12-11T17:54:58.1491596-05:00</MatterAttachmentLastModifiedUtc\>
            <MatterAttachmentMatterVersion\>sample string 7</MatterAttachmentMatterVersion\>
            <MatterAttachmentName\>sample string 4</MatterAttachmentName\>
            <MatterAttachmentPrintWithReports\>true</MatterAttachmentPrintWithReports\>
            <MatterAttachmentRowVersion\>QEA=</MatterAttachmentRowVersion\>
            <MatterAttachmentShowOnInternetPage\>true</MatterAttachmentShowOnInternetPage\>
            <MatterAttachmentSort\>16</MatterAttachmentSort\>
          </GranicusMatterAttachment\>
          <GranicusMatterAttachment\>
            <MatterAttachmentAgiloftId\>13</MatterAttachmentAgiloftId\>
            <MatterAttachmentBinary\>QEA=</MatterAttachmentBinary\>
            <MatterAttachmentDescription\>sample string 14</MatterAttachmentDescription\>
            <MatterAttachmentFileName\>sample string 6</MatterAttachmentFileName\>
            <MatterAttachmentGuid\>sample string 2</MatterAttachmentGuid\>
            <MatterAttachmentHyperlink\>sample string 5</MatterAttachmentHyperlink\>
            <MatterAttachmentId\>1</MatterAttachmentId\>
            <MatterAttachmentIsBoardLetter\>true</MatterAttachmentIsBoardLetter\>
            <MatterAttachmentIsHyperlink\>true</MatterAttachmentIsHyperlink\>
            <MatterAttachmentIsMinuteOrder\>true</MatterAttachmentIsMinuteOrder\>
            <MatterAttachmentIsSupportingDocument\>true</MatterAttachmentIsSupportingDocument\>
            <MatterAttachmentLastModifiedUtc\>2024-12-11T17:54:58.1491596-05:00</MatterAttachmentLastModifiedUtc\>
            <MatterAttachmentMatterVersion\>sample string 7</MatterAttachmentMatterVersion\>
            <MatterAttachmentName\>sample string 4</MatterAttachmentName\>
            <MatterAttachmentPrintWithReports\>true</MatterAttachmentPrintWithReports\>
            <MatterAttachmentRowVersion\>QEA=</MatterAttachmentRowVersion\>
            <MatterAttachmentShowOnInternetPage\>true</MatterAttachmentShowOnInternetPage\>
            <MatterAttachmentSort\>16</MatterAttachmentSort\>
          </GranicusMatterAttachment\>
        </EventItemMatterAttachments\>
        <EventItemMatterFile\>sample string 19</EventItemMatterFile\>
        <EventItemMatterGuid\>sample string 18</EventItemMatterGuid\>
        <EventItemMatterId\>1</EventItemMatterId\>
        <EventItemMatterName\>sample string 20</EventItemMatterName\>
        <EventItemMatterStatus\>sample string 22</EventItemMatterStatus\>
        <EventItemMatterType\>sample string 21</EventItemMatterType\>
        <EventItemMinutesNote\>sample string 8</EventItemMinutesNote\>
        <EventItemMinutesSequence\>1</EventItemMinutesSequence\>
        <EventItemMover\>sample string 16</EventItemMover\>
        <EventItemMoverId\>1</EventItemMoverId\>
        <EventItemPassedFlag\>1</EventItemPassedFlag\>
        <EventItemPassedFlagName\>sample string 11</EventItemPassedFlagName\>
        <EventItemRollCallFlag\>1</EventItemRollCallFlag\>
        <EventItemRowVersion\>QEA=</EventItemRowVersion\>
        <EventItemSeconder\>sample string 17</EventItemSeconder\>
        <EventItemSeconderId\>1</EventItemSeconderId\>
        <EventItemTally\>sample string 13</EventItemTally\>
        <EventItemTitle\>sample string 12</EventItemTitle\>
        <EventItemVersion\>sample string 6</EventItemVersion\>
        <EventItemVideo\>1</EventItemVideo\>
        <EventItemVideoIndex\>1</EventItemVideoIndex\>
      </GranicusEventItem\>
    </EventItems\>
    <EventLastModifiedUtc\>2024-12-11T17:54:58.1491596-05:00</EventLastModifiedUtc\>
    <EventLocation\>sample string 12</EventLocation\>
    <EventMedia\>sample string 17</EventMedia\>
    <EventMinutesFile\>sample string 14</EventMinutesFile\>
    <EventMinutesLastPublishedUTC\>2024-12-11T17:54:58.1491596-05:00</EventMinutesLastPublishedUTC\>
    <EventMinutesStatusId\>10</EventMinutesStatusId\>
    <EventMinutesStatusName\>sample string 11</EventMinutesStatusName\>
    <EventRowVersion\>QEA=</EventRowVersion\>
    <EventTime\>sample string 6</EventTime\>
    <EventVideoPath\>sample string 16</EventVideoPath\>
    <EventVideoStatus\>sample string 7</EventVideoStatus\>
  </GranicusEvent\>
</ArrayOfGranicusEvent\>

**Sample:**

(\[{"EventId":1,"EventGuid":"sample string 2","EventLastModifiedUtc":"2024-12-11T17:54:58.1491596-05:00","EventRowVersion":"QEA=","EventBodyId":4,"EventBodyName":"sample string 5","EventDate":"2024-12-11T17:54:58.1491596-05:00","EventTime":"sample string 6","EventVideoStatus":"sample string 7","EventAgendaStatusId":8,"EventAgendaStatusName":"sample string 9","EventMinutesStatusId":10,"EventMinutesStatusName":"sample string 11","EventLocation":"sample string 12","EventAgendaFile":"sample string 13","EventMinutesFile":"sample string 14","EventAgendaLastPublishedUTC":"2024-12-11T17:54:58.1491596-05:00","EventMinutesLastPublishedUTC":"2024-12-11T17:54:58.1491596-05:00","EventComment":"sample string 15","EventVideoPath":"sample string 16","EventMedia":"sample string 17","EventInSiteURL":"sample string 18","EventItems":\[{"EventItemId":1,"EventItemGuid":"sample string 2","EventItemLastModifiedUtc":"2024-12-11T17:54:58.1491596-05:00","EventItemRowVersion":"QEA=","EventItemEventId":4,"EventItemAgendaSequence":1,"EventItemMinutesSequence":1,"EventItemAgendaNumber":"sample string 5","EventItemVideo":1,"EventItemVideoIndex":1,"EventItemVersion":"sample string 6","EventItemAgendaNote":"sample string 7","EventItemMinutesNote":"sample string 8","EventItemActionId":1,"EventItemActionName":"sample string 9","EventItemActionText":"sample string 10","EventItemPassedFlag":1,"EventItemPassedFlagName":"sample string 11","EventItemRollCallFlag":1,"EventItemFlagExtra":1,"EventItemTitle":"sample string 12","EventItemTally":"sample string 13","EventItemAccelaRecordId":"sample string 14","EventItemConsent":15,"EventItemMoverId":1,"EventItemMover":"sample string 16","EventItemSeconderId":1,"EventItemSeconder":"sample string 17","EventItemMatterId":1,"EventItemMatterGuid":"sample string 18","EventItemMatterFile":"sample string 19","EventItemMatterName":"sample string 20","EventItemMatterType":"sample string 21","EventItemMatterStatus":"sample string 22","EventItemMatterAttachments":\[{"MatterAttachmentId":1,"MatterAttachmentGuid":"sample string 2","MatterAttachmentLastModifiedUtc":"2024-12-11T17:54:58.1491596-05:00","MatterAttachmentRowVersion":"QEA=","MatterAttachmentName":"sample string 4","MatterAttachmentHyperlink":"sample string 5","MatterAttachmentFileName":"sample string 6","MatterAttachmentMatterVersion":"sample string 7","MatterAttachmentIsHyperlink":true,"MatterAttachmentBinary":"QEA=","MatterAttachmentIsSupportingDocument":true,"MatterAttachmentShowOnInternetPage":true,"MatterAttachmentIsMinuteOrder":true,"MatterAttachmentIsBoardLetter":true,"MatterAttachmentAgiloftId":13,"MatterAttachmentDescription":"sample string 14","MatterAttachmentPrintWithReports":true,"MatterAttachmentSort":16},{"MatterAttachmentId":1,"MatterAttachmentGuid":"sample string 2","MatterAttachmentLastModifiedUtc":"2024-12-11T17:54:58.1491596-05:00","MatterAttachmentRowVersion":"QEA=","MatterAttachmentName":"sample string 4","MatterAttachmentHyperlink":"sample string 5","MatterAttachmentFileName":"sample string 6","MatterAttachmentMatterVersion":"sample string 7","MatterAttachmentIsHyperlink":true,"MatterAttachmentBinary":"QEA=","MatterAttachmentIsSupportingDocument":true,"MatterAttachmentShowOnInternetPage":true,"MatterAttachmentIsMinuteOrder":true,"MatterAttachmentIsBoardLetter":true,"MatterAttachmentAgiloftId":13,"MatterAttachmentDescription":"sample string 14","MatterAttachmentPrintWithReports":true,"MatterAttachmentSort":16}\]},{"EventItemId":1,"EventItemGuid":"sample string 2","EventItemLastModifiedUtc":"2024-12-11T17:54:58.1491596-05:00","EventItemRowVersion":"QEA=","EventItemEventId":4,"EventItemAgendaSequence":1,"EventItemMinutesSequence":1,"EventItemAgendaNumber":"sample string 5","EventItemVideo":1,"EventItemVideoIndex":1,"EventItemVersion":"sample string 6","EventItemAgendaNote":"sample string 7","EventItemMinutesNote":"sample string 8","EventItemActionId":1,"EventItemActionName":"sample string 9","EventItemActionText":"sample string 10","EventItemPassedFlag":1,"EventItemPassedFlagName":"sample string 11","EventItemRollCallFlag":1,"EventItemFlagExtra":1,"EventItemTitle":"sample string 12","EventItemTally":"sample string 13","EventItemAccelaRecordId":"sample string 14","EventItemConsent":15,"EventItemMoverId":1,"EventItemMover":"sample string 16","EventItemSeconderId":1,"EventItemSeconder":"sample string 17","EventItemMatterId":1,"EventItemMatterGuid":"sample string 18","EventItemMatterFile":"sample string 19","EventItemMatterName":"sample string 20","EventItemMatterType":"sample string 21","EventItemMatterStatus":"sample string 22","EventItemMatterAttachments":\[{"MatterAttachmentId":1,"MatterAttachmentGuid":"sample string 2","MatterAttachmentLastModifiedUtc":"2024-12-11T17:54:58.1491596-05:00","MatterAttachmentRowVersion":"QEA=","MatterAttachmentName":"sample string 4","MatterAttachmentHyperlink":"sample string 5","MatterAttachmentFileName":"sample string 6","MatterAttachmentMatterVersion":"sample string 7","MatterAttachmentIsHyperlink":true,"MatterAttachmentBinary":"QEA=","MatterAttachmentIsSupportingDocument":true,"MatterAttachmentShowOnInternetPage":true,"MatterAttachmentIsMinuteOrder":true,"MatterAttachmentIsBoardLetter":true,"MatterAttachmentAgiloftId":13,"MatterAttachmentDescription":"sample string 14","MatterAttachmentPrintWithReports":true,"MatterAttachmentSort":16},{"MatterAttachmentId":1,"MatterAttachmentGuid":"sample string 2","MatterAttachmentLastModifiedUtc":"2024-12-11T17:54:58.1491596-05:00","MatterAttachmentRowVersion":"QEA=","MatterAttachmentName":"sample string 4","MatterAttachmentHyperlink":"sample string 5","MatterAttachmentFileName":"sample string 6","MatterAttachmentMatterVersion":"sample string 7","MatterAttachmentIsHyperlink":true,"MatterAttachmentBinary":"QEA=","MatterAttachmentIsSupportingDocument":true,"MatterAttachmentShowOnInternetPage":true,"MatterAttachmentIsMinuteOrder":true,"MatterAttachmentIsBoardLetter":true,"MatterAttachmentAgiloftId":13,"MatterAttachmentDescription":"sample string 14","MatterAttachmentPrintWithReports":true,"MatterAttachmentSort":16}\]}\]},{"EventId":1,"EventGuid":"sample string 2","EventLastModifiedUtc":"2024-12-11T17:54:58.1491596-05:00","EventRowVersion":"QEA=","EventBodyId":4,"EventBodyName":"sample string 5","EventDate":"2024-12-11T17:54:58.1491596-05:00","EventTime":"sample string 6","EventVideoStatus":"sample string 7","EventAgendaStatusId":8,"EventAgendaStatusName":"sample string 9","EventMinutesStatusId":10,"EventMinutesStatusName":"sample string 11","EventLocation":"sample string 12","EventAgendaFile":"sample string 13","EventMinutesFile":"sample string 14","EventAgendaLastPublishedUTC":"2024-12-11T17:54:58.1491596-05:00","EventMinutesLastPublishedUTC":"2024-12-11T17:54:58.1491596-05:00","EventComment":"sample string 15","EventVideoPath":"sample string 16","EventMedia":"sample string 17","EventInSiteURL":"sample string 18","EventItems":\[{"EventItemId":1,"EventItemGuid":"sample string 2","EventItemLastModifiedUtc":"2024-12-11T17:54:58.1491596-05:00","EventItemRowVersion":"QEA=","EventItemEventId":4,"EventItemAgendaSequence":1,"EventItemMinutesSequence":1,"EventItemAgendaNumber":"sample string 5","EventItemVideo":1,"EventItemVideoIndex":1,"EventItemVersion":"sample string 6","EventItemAgendaNote":"sample string 7","EventItemMinutesNote":"sample string 8","EventItemActionId":1,"EventItemActionName":"sample string 9","EventItemActionText":"sample string 10","EventItemPassedFlag":1,"EventItemPassedFlagName":"sample string 11","EventItemRollCallFlag":1,"EventItemFlagExtra":1,"EventItemTitle":"sample string 12","EventItemTally":"sample string 13","EventItemAccelaRecordId":"sample string 14","EventItemConsent":15,"EventItemMoverId":1,"EventItemMover":"sample string 16","EventItemSeconderId":1,"EventItemSeconder":"sample string 17","EventItemMatterId":1,"EventItemMatterGuid":"sample string 18","EventItemMatterFile":"sample string 19","EventItemMatterName":"sample string 20","EventItemMatterType":"sample string 21","EventItemMatterStatus":"sample string 22","EventItemMatterAttachments":\[{"MatterAttachmentId":1,"MatterAttachmentGuid":"sample string 2","MatterAttachmentLastModifiedUtc":"2024-12-11T17:54:58.1491596-05:00","MatterAttachmentRowVersion":"QEA=","MatterAttachmentName":"sample string 4","MatterAttachmentHyperlink":"sample string 5","MatterAttachmentFileName":"sample string 6","MatterAttachmentMatterVersion":"sample string 7","MatterAttachmentIsHyperlink":true,"MatterAttachmentBinary":"QEA=","MatterAttachmentIsSupportingDocument":true,"MatterAttachmentShowOnInternetPage":true,"MatterAttachmentIsMinuteOrder":true,"MatterAttachmentIsBoardLetter":true,"MatterAttachmentAgiloftId":13,"MatterAttachmentDescription":"sample string 14","MatterAttachmentPrintWithReports":true,"MatterAttachmentSort":16},{"MatterAttachmentId":1,"MatterAttachmentGuid":"sample string 2","MatterAttachmentLastModifiedUtc":"2024-12-11T17:54:58.1491596-05:00","MatterAttachmentRowVersion":"QEA=","MatterAttachmentName":"sample string 4","MatterAttachmentHyperlink":"sample string 5","MatterAttachmentFileName":"sample string 6","MatterAttachmentMatterVersion":"sample string 7","MatterAttachmentIsHyperlink":true,"MatterAttachmentBinary":"QEA=","MatterAttachmentIsSupportingDocument":true,"MatterAttachmentShowOnInternetPage":true,"MatterAttachmentIsMinuteOrder":true,"MatterAttachmentIsBoardLetter":true,"MatterAttachmentAgiloftId":13,"MatterAttachmentDescription":"sample string 14","MatterAttachmentPrintWithReports":true,"MatterAttachmentSort":16}\]},{"EventItemId":1,"EventItemGuid":"sample string 2","EventItemLastModifiedUtc":"2024-12-11T17:54:58.1491596-05:00","EventItemRowVersion":"QEA=","EventItemEventId":4,"EventItemAgendaSequence":1,"EventItemMinutesSequence":1,"EventItemAgendaNumber":"sample string 5","EventItemVideo":1,"EventItemVideoIndex":1,"EventItemVersion":"sample string 6","EventItemAgendaNote":"sample string 7","EventItemMinutesNote":"sample string 8","EventItemActionId":1,"EventItemActionName":"sample string 9","EventItemActionText":"sample string 10","EventItemPassedFlag":1,"EventItemPassedFlagName":"sample string 11","EventItemRollCallFlag":1,"EventItemFlagExtra":1,"EventItemTitle":"sample string 12","EventItemTally":"sample string 13","EventItemAccelaRecordId":"sample string 14","EventItemConsent":15,"EventItemMoverId":1,"EventItemMover":"sample string 16","EventItemSeconderId":1,"EventItemSeconder":"sample string 17","EventItemMatterId":1,"EventItemMatterGuid":"sample string 18","EventItemMatterFile":"sample string 19","EventItemMatterName":"sample string 20","EventItemMatterType":"sample string 21","EventItemMatterStatus":"sample string 22","EventItemMatterAttachments":\[{"MatterAttachmentId":1,"MatterAttachmentGuid":"sample string 2","MatterAttachmentLastModifiedUtc":"2024-12-11T17:54:58.1491596-05:00","MatterAttachmentRowVersion":"QEA=","MatterAttachmentName":"sample string 4","MatterAttachmentHyperlink":"sample string 5","MatterAttachmentFileName":"sample string 6","MatterAttachmentMatterVersion":"sample string 7","MatterAttachmentIsHyperlink":true,"MatterAttachmentBinary":"QEA=","MatterAttachmentIsSupportingDocument":true,"MatterAttachmentShowOnInternetPage":true,"MatterAttachmentIsMinuteOrder":true,"MatterAttachmentIsBoardLetter":true,"MatterAttachmentAgiloftId":13,"MatterAttachmentDescription":"sample string 14","MatterAttachmentPrintWithReports":true,"MatterAttachmentSort":16},{"MatterAttachmentId":1,"MatterAttachmentGuid":"sample string 2","MatterAttachmentLastModifiedUtc":"2024-12-11T17:54:58.1491596-05:00","MatterAttachmentRowVersion":"QEA=","MatterAttachmentName":"sample string 4","MatterAttachmentHyperlink":"sample string 5","MatterAttachmentFileName":"sample string 6","MatterAttachmentMatterVersion":"sample string 7","MatterAttachmentIsHyperlink":true,"MatterAttachmentBinary":"QEA=","MatterAttachmentIsSupportingDocument":true,"MatterAttachmentShowOnInternetPage":true,"MatterAttachmentIsMinuteOrder":true,"MatterAttachmentIsBoardLetter":true,"MatterAttachmentAgiloftId":13,"MatterAttachmentDescription":"sample string 14","MatterAttachmentPrintWithReports":true,"MatterAttachmentSort":16}\]}\]}\]);

Title: GET v1/{Client}/Events/{EventId}/EventItems/{EventItemId}?AgendaNote={AgendaNote}&MinutesNote={MinutesNote}&Attachments={Attachments}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Events-EventId-EventItems-EventItemId_AgendaNote_MinutesNote_Attachments

Markdown Content:
Gets one Event Item.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| EventId | The Id of the Event.

 | integer | Required

 |
| EventItemId | The Id of the Event Item.

 | integer | Required

 |
| AgendaNote | An optional parameter that specifies whethere the agenda note should be included. Set to 1 to include. 0 by default.

 | integer | Default value is 0

 |
| MinutesNote | An optional parameter that specifies whethere the minutes note should be included. Set to 1 to include. 0 by default.

 | integer | Default value is 0

 |
| Attachments | An optional parameter that specifies whether the event items' attachments should be included. Set to 1 to include. 0 by default.

 | integer | Default value is 0

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

[GranicusEventItem](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusEventItem)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| EventItemId |  | integer | None.
 |
| EventItemGuid |  | string | None.

 |
| EventItemLastModifiedUtc |  | date | None.

 |
| EventItemRowVersion |  | Collection of byte | None.

 |
| EventItemEventId |  | integer | None.

 |
| EventItemAgendaSequence |  | integer | None.

 |
| EventItemMinutesSequence |  | integer | None.

 |
| EventItemAgendaNumber |  | string | None.

 |
| EventItemVideo |  | integer | None.

 |
| EventItemVideoIndex |  | integer | None.

 |
| EventItemVersion |  | string | None.

 |
| EventItemAgendaNote |  | string | None.

 |
| EventItemMinutesNote |  | string | None.

 |
| EventItemActionId |  | integer | None.

 |
| EventItemActionName |  | string | None.

 |
| EventItemActionText |  | string | None.

 |
| EventItemPassedFlag |  | integer | None.

 |
| EventItemPassedFlagName |  | string | None.

 |
| EventItemRollCallFlag |  | integer | None.

 |
| EventItemFlagExtra |  | integer | None.

 |
| EventItemTitle |  | string | None.

 |
| EventItemTally |  | string | None.

 |
| EventItemAccelaRecordId |  | string | None.

 |
| EventItemConsent |  | integer | None.

 |
| EventItemMoverId |  | integer | None.

 |
| EventItemMover |  | string | None.

 |
| EventItemSeconderId |  | integer | None.

 |
| EventItemSeconder |  | string | None.

 |
| EventItemMatterId |  | integer | None.

 |
| EventItemMatterGuid |  | string | None.

 |
| EventItemMatterFile |  | string | None.

 |
| EventItemMatterName |  | string | None.

 |
| EventItemMatterType |  | string | None.

 |
| EventItemMatterStatus |  | string | None.

 |
| EventItemMatterAttachments |  | Collection of [GranicusMatterAttachment](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusMatterAttachment) | None.

 |

### Response Formats

**Sample:**

{
  "EventItemId": 1,
  "EventItemGuid": "sample string 2",
  "EventItemLastModifiedUtc": "2024-12-11T17:54:52.4349-05:00",
  "EventItemRowVersion": "QEA=",
  "EventItemEventId": 4,
  "EventItemAgendaSequence": 1,
  "EventItemMinutesSequence": 1,
  "EventItemAgendaNumber": "sample string 5",
  "EventItemVideo": 1,
  "EventItemVideoIndex": 1,
  "EventItemVersion": "sample string 6",
  "EventItemAgendaNote": "sample string 7",
  "EventItemMinutesNote": "sample string 8",
  "EventItemActionId": 1,
  "EventItemActionName": "sample string 9",
  "EventItemActionText": "sample string 10",
  "EventItemPassedFlag": 1,
  "EventItemPassedFlagName": "sample string 11",
  "EventItemRollCallFlag": 1,
  "EventItemFlagExtra": 1,
  "EventItemTitle": "sample string 12",
  "EventItemTally": "sample string 13",
  "EventItemAccelaRecordId": "sample string 14",
  "EventItemConsent": 15,
  "EventItemMoverId": 1,
  "EventItemMover": "sample string 16",
  "EventItemSeconderId": 1,
  "EventItemSeconder": "sample string 17",
  "EventItemMatterId": 1,
  "EventItemMatterGuid": "sample string 18",
  "EventItemMatterFile": "sample string 19",
  "EventItemMatterName": "sample string 20",
  "EventItemMatterType": "sample string 21",
  "EventItemMatterStatus": "sample string 22",
  "EventItemMatterAttachments": \[
    {
      "MatterAttachmentId": 1,
      "MatterAttachmentGuid": "sample string 2",
      "MatterAttachmentLastModifiedUtc": "2024-12-11T17:54:52.4349-05:00",
      "MatterAttachmentRowVersion": "QEA=",
      "MatterAttachmentName": "sample string 4",
      "MatterAttachmentHyperlink": "sample string 5",
      "MatterAttachmentFileName": "sample string 6",
      "MatterAttachmentMatterVersion": "sample string 7",
      "MatterAttachmentIsHyperlink": true,
      "MatterAttachmentBinary": "QEA=",
      "MatterAttachmentIsSupportingDocument": true,
      "MatterAttachmentShowOnInternetPage": true,
      "MatterAttachmentIsMinuteOrder": true,
      "MatterAttachmentIsBoardLetter": true,
      "MatterAttachmentAgiloftId": 13,
      "MatterAttachmentDescription": "sample string 14",
      "MatterAttachmentPrintWithReports": true,
      "MatterAttachmentSort": 16
    },
    {
      "MatterAttachmentId": 1,
      "MatterAttachmentGuid": "sample string 2",
      "MatterAttachmentLastModifiedUtc": "2024-12-11T17:54:52.4349-05:00",
      "MatterAttachmentRowVersion": "QEA=",
      "MatterAttachmentName": "sample string 4",
      "MatterAttachmentHyperlink": "sample string 5",
      "MatterAttachmentFileName": "sample string 6",
      "MatterAttachmentMatterVersion": "sample string 7",
      "MatterAttachmentIsHyperlink": true,
      "MatterAttachmentBinary": "QEA=",
      "MatterAttachmentIsSupportingDocument": true,
      "MatterAttachmentShowOnInternetPage": true,
      "MatterAttachmentIsMinuteOrder": true,
      "MatterAttachmentIsBoardLetter": true,
      "MatterAttachmentAgiloftId": 13,
      "MatterAttachmentDescription": "sample string 14",
      "MatterAttachmentPrintWithReports": true,
      "MatterAttachmentSort": 16
    }
  \]
}

**Sample:**

<GranicusEventItem xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <EventItemAccelaRecordId\>sample string 14</EventItemAccelaRecordId\>
  <EventItemActionId\>1</EventItemActionId\>
  <EventItemActionName\>sample string 9</EventItemActionName\>
  <EventItemActionText\>sample string 10</EventItemActionText\>
  <EventItemAgendaNote\>sample string 7</EventItemAgendaNote\>
  <EventItemAgendaNumber\>sample string 5</EventItemAgendaNumber\>
  <EventItemAgendaSequence\>1</EventItemAgendaSequence\>
  <EventItemConsent\>15</EventItemConsent\>
  <EventItemEventId\>4</EventItemEventId\>
  <EventItemFlagExtra\>1</EventItemFlagExtra\>
  <EventItemGuid\>sample string 2</EventItemGuid\>
  <EventItemId\>1</EventItemId\>
  <EventItemLastModifiedUtc\>2024-12-11T17:54:52.4349-05:00</EventItemLastModifiedUtc\>
  <EventItemMatterAttachments\>
    <GranicusMatterAttachment\>
      <MatterAttachmentAgiloftId\>13</MatterAttachmentAgiloftId\>
      <MatterAttachmentBinary\>QEA=</MatterAttachmentBinary\>
      <MatterAttachmentDescription\>sample string 14</MatterAttachmentDescription\>
      <MatterAttachmentFileName\>sample string 6</MatterAttachmentFileName\>
      <MatterAttachmentGuid\>sample string 2</MatterAttachmentGuid\>
      <MatterAttachmentHyperlink\>sample string 5</MatterAttachmentHyperlink\>
      <MatterAttachmentId\>1</MatterAttachmentId\>
      <MatterAttachmentIsBoardLetter\>true</MatterAttachmentIsBoardLetter\>
      <MatterAttachmentIsHyperlink\>true</MatterAttachmentIsHyperlink\>
      <MatterAttachmentIsMinuteOrder\>true</MatterAttachmentIsMinuteOrder\>
      <MatterAttachmentIsSupportingDocument\>true</MatterAttachmentIsSupportingDocument\>
      <MatterAttachmentLastModifiedUtc\>2024-12-11T17:54:52.4349-05:00</MatterAttachmentLastModifiedUtc\>
      <MatterAttachmentMatterVersion\>sample string 7</MatterAttachmentMatterVersion\>
      <MatterAttachmentName\>sample string 4</MatterAttachmentName\>
      <MatterAttachmentPrintWithReports\>true</MatterAttachmentPrintWithReports\>
      <MatterAttachmentRowVersion\>QEA=</MatterAttachmentRowVersion\>
      <MatterAttachmentShowOnInternetPage\>true</MatterAttachmentShowOnInternetPage\>
      <MatterAttachmentSort\>16</MatterAttachmentSort\>
    </GranicusMatterAttachment\>
    <GranicusMatterAttachment\>
      <MatterAttachmentAgiloftId\>13</MatterAttachmentAgiloftId\>
      <MatterAttachmentBinary\>QEA=</MatterAttachmentBinary\>
      <MatterAttachmentDescription\>sample string 14</MatterAttachmentDescription\>
      <MatterAttachmentFileName\>sample string 6</MatterAttachmentFileName\>
      <MatterAttachmentGuid\>sample string 2</MatterAttachmentGuid\>
      <MatterAttachmentHyperlink\>sample string 5</MatterAttachmentHyperlink\>
      <MatterAttachmentId\>1</MatterAttachmentId\>
      <MatterAttachmentIsBoardLetter\>true</MatterAttachmentIsBoardLetter\>
      <MatterAttachmentIsHyperlink\>true</MatterAttachmentIsHyperlink\>
      <MatterAttachmentIsMinuteOrder\>true</MatterAttachmentIsMinuteOrder\>
      <MatterAttachmentIsSupportingDocument\>true</MatterAttachmentIsSupportingDocument\>
      <MatterAttachmentLastModifiedUtc\>2024-12-11T17:54:52.4349-05:00</MatterAttachmentLastModifiedUtc\>
      <MatterAttachmentMatterVersion\>sample string 7</MatterAttachmentMatterVersion\>
      <MatterAttachmentName\>sample string 4</MatterAttachmentName\>
      <MatterAttachmentPrintWithReports\>true</MatterAttachmentPrintWithReports\>
      <MatterAttachmentRowVersion\>QEA=</MatterAttachmentRowVersion\>
      <MatterAttachmentShowOnInternetPage\>true</MatterAttachmentShowOnInternetPage\>
      <MatterAttachmentSort\>16</MatterAttachmentSort\>
    </GranicusMatterAttachment\>
  </EventItemMatterAttachments\>
  <EventItemMatterFile\>sample string 19</EventItemMatterFile\>
  <EventItemMatterGuid\>sample string 18</EventItemMatterGuid\>
  <EventItemMatterId\>1</EventItemMatterId\>
  <EventItemMatterName\>sample string 20</EventItemMatterName\>
  <EventItemMatterStatus\>sample string 22</EventItemMatterStatus\>
  <EventItemMatterType\>sample string 21</EventItemMatterType\>
  <EventItemMinutesNote\>sample string 8</EventItemMinutesNote\>
  <EventItemMinutesSequence\>1</EventItemMinutesSequence\>
  <EventItemMover\>sample string 16</EventItemMover\>
  <EventItemMoverId\>1</EventItemMoverId\>
  <EventItemPassedFlag\>1</EventItemPassedFlag\>
  <EventItemPassedFlagName\>sample string 11</EventItemPassedFlagName\>
  <EventItemRollCallFlag\>1</EventItemRollCallFlag\>
  <EventItemRowVersion\>QEA=</EventItemRowVersion\>
  <EventItemSeconder\>sample string 17</EventItemSeconder\>
  <EventItemSeconderId\>1</EventItemSeconderId\>
  <EventItemTally\>sample string 13</EventItemTally\>
  <EventItemTitle\>sample string 12</EventItemTitle\>
  <EventItemVersion\>sample string 6</EventItemVersion\>
  <EventItemVideo\>1</EventItemVideo\>
  <EventItemVideoIndex\>1</EventItemVideoIndex\>
</GranicusEventItem\>

**Sample:**

({"EventItemId":1,"EventItemGuid":"sample string 2","EventItemLastModifiedUtc":"2024-12-11T17:54:52.4349-05:00","EventItemRowVersion":"QEA=","EventItemEventId":4,"EventItemAgendaSequence":1,"EventItemMinutesSequence":1,"EventItemAgendaNumber":"sample string 5","EventItemVideo":1,"EventItemVideoIndex":1,"EventItemVersion":"sample string 6","EventItemAgendaNote":"sample string 7","EventItemMinutesNote":"sample string 8","EventItemActionId":1,"EventItemActionName":"sample string 9","EventItemActionText":"sample string 10","EventItemPassedFlag":1,"EventItemPassedFlagName":"sample string 11","EventItemRollCallFlag":1,"EventItemFlagExtra":1,"EventItemTitle":"sample string 12","EventItemTally":"sample string 13","EventItemAccelaRecordId":"sample string 14","EventItemConsent":15,"EventItemMoverId":1,"EventItemMover":"sample string 16","EventItemSeconderId":1,"EventItemSeconder":"sample string 17","EventItemMatterId":1,"EventItemMatterGuid":"sample string 18","EventItemMatterFile":"sample string 19","EventItemMatterName":"sample string 20","EventItemMatterType":"sample string 21","EventItemMatterStatus":"sample string 22","EventItemMatterAttachments":\[{"MatterAttachmentId":1,"MatterAttachmentGuid":"sample string 2","MatterAttachmentLastModifiedUtc":"2024-12-11T17:54:52.4349-05:00","MatterAttachmentRowVersion":"QEA=","MatterAttachmentName":"sample string 4","MatterAttachmentHyperlink":"sample string 5","MatterAttachmentFileName":"sample string 6","MatterAttachmentMatterVersion":"sample string 7","MatterAttachmentIsHyperlink":true,"MatterAttachmentBinary":"QEA=","MatterAttachmentIsSupportingDocument":true,"MatterAttachmentShowOnInternetPage":true,"MatterAttachmentIsMinuteOrder":true,"MatterAttachmentIsBoardLetter":true,"MatterAttachmentAgiloftId":13,"MatterAttachmentDescription":"sample string 14","MatterAttachmentPrintWithReports":true,"MatterAttachmentSort":16},{"MatterAttachmentId":1,"MatterAttachmentGuid":"sample string 2","MatterAttachmentLastModifiedUtc":"2024-12-11T17:54:52.4349-05:00","MatterAttachmentRowVersion":"QEA=","MatterAttachmentName":"sample string 4","MatterAttachmentHyperlink":"sample string 5","MatterAttachmentFileName":"sample string 6","MatterAttachmentMatterVersion":"sample string 7","MatterAttachmentIsHyperlink":true,"MatterAttachmentBinary":"QEA=","MatterAttachmentIsSupportingDocument":true,"MatterAttachmentShowOnInternetPage":true,"MatterAttachmentIsMinuteOrder":true,"MatterAttachmentIsBoardLetter":true,"MatterAttachmentAgiloftId":13,"MatterAttachmentDescription":"sample string 14","MatterAttachmentPrintWithReports":true,"MatterAttachmentSort":16}\]});

Title: GET v1/{Client}/Events/{EventId}/EventItems?AgendaNote={AgendaNote}&MinutesNote={MinutesNote}&Attachments={Attachments}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Events-EventId-EventItems_AgendaNote_MinutesNote_Attachments

Markdown Content:
Gets all Event Items under a particular Event.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| EventId | The Id of the Event.

 | integer | Required

 |
| AgendaNote | An optional parameter that specifies whether the agenda note should be included. Set to 1 to include. 0 by default.

 | integer | Default value is 0

 |
| MinutesNote | An optional parameter that specifies whether the minutes note should be included. Set to 1 to include. 0 by default.

 | integer | Default value is 0

 |
| Attachments | An optional parameter that specifies whether the event items' attachments should be included. Set to 1 to include. 0 by default.

 | integer | Default value is 0

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusEventItem](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusEventItem)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| EventItemId |  | integer | None.
 |
| EventItemGuid |  | string | None.

 |
| EventItemLastModifiedUtc |  | date | None.

 |
| EventItemRowVersion |  | Collection of byte | None.

 |
| EventItemEventId |  | integer | None.

 |
| EventItemAgendaSequence |  | integer | None.

 |
| EventItemMinutesSequence |  | integer | None.

 |
| EventItemAgendaNumber |  | string | None.

 |
| EventItemVideo |  | integer | None.

 |
| EventItemVideoIndex |  | integer | None.

 |
| EventItemVersion |  | string | None.

 |
| EventItemAgendaNote |  | string | None.

 |
| EventItemMinutesNote |  | string | None.

 |
| EventItemActionId |  | integer | None.

 |
| EventItemActionName |  | string | None.

 |
| EventItemActionText |  | string | None.

 |
| EventItemPassedFlag |  | integer | None.

 |
| EventItemPassedFlagName |  | string | None.

 |
| EventItemRollCallFlag |  | integer | None.

 |
| EventItemFlagExtra |  | integer | None.

 |
| EventItemTitle |  | string | None.

 |
| EventItemTally |  | string | None.

 |
| EventItemAccelaRecordId |  | string | None.

 |
| EventItemConsent |  | integer | None.

 |
| EventItemMoverId |  | integer | None.

 |
| EventItemMover |  | string | None.

 |
| EventItemSeconderId |  | integer | None.

 |
| EventItemSeconder |  | string | None.

 |
| EventItemMatterId |  | integer | None.

 |
| EventItemMatterGuid |  | string | None.

 |
| EventItemMatterFile |  | string | None.

 |
| EventItemMatterName |  | string | None.

 |
| EventItemMatterType |  | string | None.

 |
| EventItemMatterStatus |  | string | None.

 |
| EventItemMatterAttachments |  | Collection of [GranicusMatterAttachment](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusMatterAttachment) | None.

 |

### Response Formats

**Sample:**

\[
  {
    "EventItemId": 1,
    "EventItemGuid": "sample string 2",
    "EventItemLastModifiedUtc": "2024-12-11T17:54:34.6886024-05:00",
    "EventItemRowVersion": "QEA=",
    "EventItemEventId": 4,
    "EventItemAgendaSequence": 1,
    "EventItemMinutesSequence": 1,
    "EventItemAgendaNumber": "sample string 5",
    "EventItemVideo": 1,
    "EventItemVideoIndex": 1,
    "EventItemVersion": "sample string 6",
    "EventItemAgendaNote": "sample string 7",
    "EventItemMinutesNote": "sample string 8",
    "EventItemActionId": 1,
    "EventItemActionName": "sample string 9",
    "EventItemActionText": "sample string 10",
    "EventItemPassedFlag": 1,
    "EventItemPassedFlagName": "sample string 11",
    "EventItemRollCallFlag": 1,
    "EventItemFlagExtra": 1,
    "EventItemTitle": "sample string 12",
    "EventItemTally": "sample string 13",
    "EventItemAccelaRecordId": "sample string 14",
    "EventItemConsent": 15,
    "EventItemMoverId": 1,
    "EventItemMover": "sample string 16",
    "EventItemSeconderId": 1,
    "EventItemSeconder": "sample string 17",
    "EventItemMatterId": 1,
    "EventItemMatterGuid": "sample string 18",
    "EventItemMatterFile": "sample string 19",
    "EventItemMatterName": "sample string 20",
    "EventItemMatterType": "sample string 21",
    "EventItemMatterStatus": "sample string 22",
    "EventItemMatterAttachments": \[
      {
        "MatterAttachmentId": 1,
        "MatterAttachmentGuid": "sample string 2",
        "MatterAttachmentLastModifiedUtc": "2024-12-11T17:54:34.6886024-05:00",
        "MatterAttachmentRowVersion": "QEA=",
        "MatterAttachmentName": "sample string 4",
        "MatterAttachmentHyperlink": "sample string 5",
        "MatterAttachmentFileName": "sample string 6",
        "MatterAttachmentMatterVersion": "sample string 7",
        "MatterAttachmentIsHyperlink": true,
        "MatterAttachmentBinary": "QEA=",
        "MatterAttachmentIsSupportingDocument": true,
        "MatterAttachmentShowOnInternetPage": true,
        "MatterAttachmentIsMinuteOrder": true,
        "MatterAttachmentIsBoardLetter": true,
        "MatterAttachmentAgiloftId": 13,
        "MatterAttachmentDescription": "sample string 14",
        "MatterAttachmentPrintWithReports": true,
        "MatterAttachmentSort": 16
      },
      {
        "MatterAttachmentId": 1,
        "MatterAttachmentGuid": "sample string 2",
        "MatterAttachmentLastModifiedUtc": "2024-12-11T17:54:34.6886024-05:00",
        "MatterAttachmentRowVersion": "QEA=",
        "MatterAttachmentName": "sample string 4",
        "MatterAttachmentHyperlink": "sample string 5",
        "MatterAttachmentFileName": "sample string 6",
        "MatterAttachmentMatterVersion": "sample string 7",
        "MatterAttachmentIsHyperlink": true,
        "MatterAttachmentBinary": "QEA=",
        "MatterAttachmentIsSupportingDocument": true,
        "MatterAttachmentShowOnInternetPage": true,
        "MatterAttachmentIsMinuteOrder": true,
        "MatterAttachmentIsBoardLetter": true,
        "MatterAttachmentAgiloftId": 13,
        "MatterAttachmentDescription": "sample string 14",
        "MatterAttachmentPrintWithReports": true,
        "MatterAttachmentSort": 16
      }
    \]
  },
  {
    "EventItemId": 1,
    "EventItemGuid": "sample string 2",
    "EventItemLastModifiedUtc": "2024-12-11T17:54:34.6886024-05:00",
    "EventItemRowVersion": "QEA=",
    "EventItemEventId": 4,
    "EventItemAgendaSequence": 1,
    "EventItemMinutesSequence": 1,
    "EventItemAgendaNumber": "sample string 5",
    "EventItemVideo": 1,
    "EventItemVideoIndex": 1,
    "EventItemVersion": "sample string 6",
    "EventItemAgendaNote": "sample string 7",
    "EventItemMinutesNote": "sample string 8",
    "EventItemActionId": 1,
    "EventItemActionName": "sample string 9",
    "EventItemActionText": "sample string 10",
    "EventItemPassedFlag": 1,
    "EventItemPassedFlagName": "sample string 11",
    "EventItemRollCallFlag": 1,
    "EventItemFlagExtra": 1,
    "EventItemTitle": "sample string 12",
    "EventItemTally": "sample string 13",
    "EventItemAccelaRecordId": "sample string 14",
    "EventItemConsent": 15,
    "EventItemMoverId": 1,
    "EventItemMover": "sample string 16",
    "EventItemSeconderId": 1,
    "EventItemSeconder": "sample string 17",
    "EventItemMatterId": 1,
    "EventItemMatterGuid": "sample string 18",
    "EventItemMatterFile": "sample string 19",
    "EventItemMatterName": "sample string 20",
    "EventItemMatterType": "sample string 21",
    "EventItemMatterStatus": "sample string 22",
    "EventItemMatterAttachments": \[
      {
        "MatterAttachmentId": 1,
        "MatterAttachmentGuid": "sample string 2",
        "MatterAttachmentLastModifiedUtc": "2024-12-11T17:54:34.6886024-05:00",
        "MatterAttachmentRowVersion": "QEA=",
        "MatterAttachmentName": "sample string 4",
        "MatterAttachmentHyperlink": "sample string 5",
        "MatterAttachmentFileName": "sample string 6",
        "MatterAttachmentMatterVersion": "sample string 7",
        "MatterAttachmentIsHyperlink": true,
        "MatterAttachmentBinary": "QEA=",
        "MatterAttachmentIsSupportingDocument": true,
        "MatterAttachmentShowOnInternetPage": true,
        "MatterAttachmentIsMinuteOrder": true,
        "MatterAttachmentIsBoardLetter": true,
        "MatterAttachmentAgiloftId": 13,
        "MatterAttachmentDescription": "sample string 14",
        "MatterAttachmentPrintWithReports": true,
        "MatterAttachmentSort": 16
      },
      {
        "MatterAttachmentId": 1,
        "MatterAttachmentGuid": "sample string 2",
        "MatterAttachmentLastModifiedUtc": "2024-12-11T17:54:34.6886024-05:00",
        "MatterAttachmentRowVersion": "QEA=",
        "MatterAttachmentName": "sample string 4",
        "MatterAttachmentHyperlink": "sample string 5",
        "MatterAttachmentFileName": "sample string 6",
        "MatterAttachmentMatterVersion": "sample string 7",
        "MatterAttachmentIsHyperlink": true,
        "MatterAttachmentBinary": "QEA=",
        "MatterAttachmentIsSupportingDocument": true,
        "MatterAttachmentShowOnInternetPage": true,
        "MatterAttachmentIsMinuteOrder": true,
        "MatterAttachmentIsBoardLetter": true,
        "MatterAttachmentAgiloftId": 13,
        "MatterAttachmentDescription": "sample string 14",
        "MatterAttachmentPrintWithReports": true,
        "MatterAttachmentSort": 16
      }
    \]
  }
\]

**Sample:**

<ArrayOfGranicusEventItem xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusEventItem\>
    <EventItemAccelaRecordId\>sample string 14</EventItemAccelaRecordId\>
    <EventItemActionId\>1</EventItemActionId\>
    <EventItemActionName\>sample string 9</EventItemActionName\>
    <EventItemActionText\>sample string 10</EventItemActionText\>
    <EventItemAgendaNote\>sample string 7</EventItemAgendaNote\>
    <EventItemAgendaNumber\>sample string 5</EventItemAgendaNumber\>
    <EventItemAgendaSequence\>1</EventItemAgendaSequence\>
    <EventItemConsent\>15</EventItemConsent\>
    <EventItemEventId\>4</EventItemEventId\>
    <EventItemFlagExtra\>1</EventItemFlagExtra\>
    <EventItemGuid\>sample string 2</EventItemGuid\>
    <EventItemId\>1</EventItemId\>
    <EventItemLastModifiedUtc\>2024-12-11T17:54:34.6886024-05:00</EventItemLastModifiedUtc\>
    <EventItemMatterAttachments\>
      <GranicusMatterAttachment\>
        <MatterAttachmentAgiloftId\>13</MatterAttachmentAgiloftId\>
        <MatterAttachmentBinary\>QEA=</MatterAttachmentBinary\>
        <MatterAttachmentDescription\>sample string 14</MatterAttachmentDescription\>
        <MatterAttachmentFileName\>sample string 6</MatterAttachmentFileName\>
        <MatterAttachmentGuid\>sample string 2</MatterAttachmentGuid\>
        <MatterAttachmentHyperlink\>sample string 5</MatterAttachmentHyperlink\>
        <MatterAttachmentId\>1</MatterAttachmentId\>
        <MatterAttachmentIsBoardLetter\>true</MatterAttachmentIsBoardLetter\>
        <MatterAttachmentIsHyperlink\>true</MatterAttachmentIsHyperlink\>
        <MatterAttachmentIsMinuteOrder\>true</MatterAttachmentIsMinuteOrder\>
        <MatterAttachmentIsSupportingDocument\>true</MatterAttachmentIsSupportingDocument\>
        <MatterAttachmentLastModifiedUtc\>2024-12-11T17:54:34.6886024-05:00</MatterAttachmentLastModifiedUtc\>
        <MatterAttachmentMatterVersion\>sample string 7</MatterAttachmentMatterVersion\>
        <MatterAttachmentName\>sample string 4</MatterAttachmentName\>
        <MatterAttachmentPrintWithReports\>true</MatterAttachmentPrintWithReports\>
        <MatterAttachmentRowVersion\>QEA=</MatterAttachmentRowVersion\>
        <MatterAttachmentShowOnInternetPage\>true</MatterAttachmentShowOnInternetPage\>
        <MatterAttachmentSort\>16</MatterAttachmentSort\>
      </GranicusMatterAttachment\>
      <GranicusMatterAttachment\>
        <MatterAttachmentAgiloftId\>13</MatterAttachmentAgiloftId\>
        <MatterAttachmentBinary\>QEA=</MatterAttachmentBinary\>
        <MatterAttachmentDescription\>sample string 14</MatterAttachmentDescription\>
        <MatterAttachmentFileName\>sample string 6</MatterAttachmentFileName\>
        <MatterAttachmentGuid\>sample string 2</MatterAttachmentGuid\>
        <MatterAttachmentHyperlink\>sample string 5</MatterAttachmentHyperlink\>
        <MatterAttachmentId\>1</MatterAttachmentId\>
        <MatterAttachmentIsBoardLetter\>true</MatterAttachmentIsBoardLetter\>
        <MatterAttachmentIsHyperlink\>true</MatterAttachmentIsHyperlink\>
        <MatterAttachmentIsMinuteOrder\>true</MatterAttachmentIsMinuteOrder\>
        <MatterAttachmentIsSupportingDocument\>true</MatterAttachmentIsSupportingDocument\>
        <MatterAttachmentLastModifiedUtc\>2024-12-11T17:54:34.6886024-05:00</MatterAttachmentLastModifiedUtc\>
        <MatterAttachmentMatterVersion\>sample string 7</MatterAttachmentMatterVersion\>
        <MatterAttachmentName\>sample string 4</MatterAttachmentName\>
        <MatterAttachmentPrintWithReports\>true</MatterAttachmentPrintWithReports\>
        <MatterAttachmentRowVersion\>QEA=</MatterAttachmentRowVersion\>
        <MatterAttachmentShowOnInternetPage\>true</MatterAttachmentShowOnInternetPage\>
        <MatterAttachmentSort\>16</MatterAttachmentSort\>
      </GranicusMatterAttachment\>
    </EventItemMatterAttachments\>
    <EventItemMatterFile\>sample string 19</EventItemMatterFile\>
    <EventItemMatterGuid\>sample string 18</EventItemMatterGuid\>
    <EventItemMatterId\>1</EventItemMatterId\>
    <EventItemMatterName\>sample string 20</EventItemMatterName\>
    <EventItemMatterStatus\>sample string 22</EventItemMatterStatus\>
    <EventItemMatterType\>sample string 21</EventItemMatterType\>
    <EventItemMinutesNote\>sample string 8</EventItemMinutesNote\>
    <EventItemMinutesSequence\>1</EventItemMinutesSequence\>
    <EventItemMover\>sample string 16</EventItemMover\>
    <EventItemMoverId\>1</EventItemMoverId\>
    <EventItemPassedFlag\>1</EventItemPassedFlag\>
    <EventItemPassedFlagName\>sample string 11</EventItemPassedFlagName\>
    <EventItemRollCallFlag\>1</EventItemRollCallFlag\>
    <EventItemRowVersion\>QEA=</EventItemRowVersion\>
    <EventItemSeconder\>sample string 17</EventItemSeconder\>
    <EventItemSeconderId\>1</EventItemSeconderId\>
    <EventItemTally\>sample string 13</EventItemTally\>
    <EventItemTitle\>sample string 12</EventItemTitle\>
    <EventItemVersion\>sample string 6</EventItemVersion\>
    <EventItemVideo\>1</EventItemVideo\>
    <EventItemVideoIndex\>1</EventItemVideoIndex\>
  </GranicusEventItem\>
  <GranicusEventItem\>
    <EventItemAccelaRecordId\>sample string 14</EventItemAccelaRecordId\>
    <EventItemActionId\>1</EventItemActionId\>
    <EventItemActionName\>sample string 9</EventItemActionName\>
    <EventItemActionText\>sample string 10</EventItemActionText\>
    <EventItemAgendaNote\>sample string 7</EventItemAgendaNote\>
    <EventItemAgendaNumber\>sample string 5</EventItemAgendaNumber\>
    <EventItemAgendaSequence\>1</EventItemAgendaSequence\>
    <EventItemConsent\>15</EventItemConsent\>
    <EventItemEventId\>4</EventItemEventId\>
    <EventItemFlagExtra\>1</EventItemFlagExtra\>
    <EventItemGuid\>sample string 2</EventItemGuid\>
    <EventItemId\>1</EventItemId\>
    <EventItemLastModifiedUtc\>2024-12-11T17:54:34.6886024-05:00</EventItemLastModifiedUtc\>
    <EventItemMatterAttachments\>
      <GranicusMatterAttachment\>
        <MatterAttachmentAgiloftId\>13</MatterAttachmentAgiloftId\>
        <MatterAttachmentBinary\>QEA=</MatterAttachmentBinary\>
        <MatterAttachmentDescription\>sample string 14</MatterAttachmentDescription\>
        <MatterAttachmentFileName\>sample string 6</MatterAttachmentFileName\>
        <MatterAttachmentGuid\>sample string 2</MatterAttachmentGuid\>
        <MatterAttachmentHyperlink\>sample string 5</MatterAttachmentHyperlink\>
        <MatterAttachmentId\>1</MatterAttachmentId\>
        <MatterAttachmentIsBoardLetter\>true</MatterAttachmentIsBoardLetter\>
        <MatterAttachmentIsHyperlink\>true</MatterAttachmentIsHyperlink\>
        <MatterAttachmentIsMinuteOrder\>true</MatterAttachmentIsMinuteOrder\>
        <MatterAttachmentIsSupportingDocument\>true</MatterAttachmentIsSupportingDocument\>
        <MatterAttachmentLastModifiedUtc\>2024-12-11T17:54:34.6886024-05:00</MatterAttachmentLastModifiedUtc\>
        <MatterAttachmentMatterVersion\>sample string 7</MatterAttachmentMatterVersion\>
        <MatterAttachmentName\>sample string 4</MatterAttachmentName\>
        <MatterAttachmentPrintWithReports\>true</MatterAttachmentPrintWithReports\>
        <MatterAttachmentRowVersion\>QEA=</MatterAttachmentRowVersion\>
        <MatterAttachmentShowOnInternetPage\>true</MatterAttachmentShowOnInternetPage\>
        <MatterAttachmentSort\>16</MatterAttachmentSort\>
      </GranicusMatterAttachment\>
      <GranicusMatterAttachment\>
        <MatterAttachmentAgiloftId\>13</MatterAttachmentAgiloftId\>
        <MatterAttachmentBinary\>QEA=</MatterAttachmentBinary\>
        <MatterAttachmentDescription\>sample string 14</MatterAttachmentDescription\>
        <MatterAttachmentFileName\>sample string 6</MatterAttachmentFileName\>
        <MatterAttachmentGuid\>sample string 2</MatterAttachmentGuid\>
        <MatterAttachmentHyperlink\>sample string 5</MatterAttachmentHyperlink\>
        <MatterAttachmentId\>1</MatterAttachmentId\>
        <MatterAttachmentIsBoardLetter\>true</MatterAttachmentIsBoardLetter\>
        <MatterAttachmentIsHyperlink\>true</MatterAttachmentIsHyperlink\>
        <MatterAttachmentIsMinuteOrder\>true</MatterAttachmentIsMinuteOrder\>
        <MatterAttachmentIsSupportingDocument\>true</MatterAttachmentIsSupportingDocument\>
        <MatterAttachmentLastModifiedUtc\>2024-12-11T17:54:34.6886024-05:00</MatterAttachmentLastModifiedUtc\>
        <MatterAttachmentMatterVersion\>sample string 7</MatterAttachmentMatterVersion\>
        <MatterAttachmentName\>sample string 4</MatterAttachmentName\>
        <MatterAttachmentPrintWithReports\>true</MatterAttachmentPrintWithReports\>
        <MatterAttachmentRowVersion\>QEA=</MatterAttachmentRowVersion\>
        <MatterAttachmentShowOnInternetPage\>true</MatterAttachmentShowOnInternetPage\>
        <MatterAttachmentSort\>16</MatterAttachmentSort\>
      </GranicusMatterAttachment\>
    </EventItemMatterAttachments\>
    <EventItemMatterFile\>sample string 19</EventItemMatterFile\>
    <EventItemMatterGuid\>sample string 18</EventItemMatterGuid\>
    <EventItemMatterId\>1</EventItemMatterId\>
    <EventItemMatterName\>sample string 20</EventItemMatterName\>
    <EventItemMatterStatus\>sample string 22</EventItemMatterStatus\>
    <EventItemMatterType\>sample string 21</EventItemMatterType\>
    <EventItemMinutesNote\>sample string 8</EventItemMinutesNote\>
    <EventItemMinutesSequence\>1</EventItemMinutesSequence\>
    <EventItemMover\>sample string 16</EventItemMover\>
    <EventItemMoverId\>1</EventItemMoverId\>
    <EventItemPassedFlag\>1</EventItemPassedFlag\>
    <EventItemPassedFlagName\>sample string 11</EventItemPassedFlagName\>
    <EventItemRollCallFlag\>1</EventItemRollCallFlag\>
    <EventItemRowVersion\>QEA=</EventItemRowVersion\>
    <EventItemSeconder\>sample string 17</EventItemSeconder\>
    <EventItemSeconderId\>1</EventItemSeconderId\>
    <EventItemTally\>sample string 13</EventItemTally\>
    <EventItemTitle\>sample string 12</EventItemTitle\>
    <EventItemVersion\>sample string 6</EventItemVersion\>
    <EventItemVideo\>1</EventItemVideo\>
    <EventItemVideoIndex\>1</EventItemVideoIndex\>
  </GranicusEventItem\>
</ArrayOfGranicusEventItem\>

**Sample:**

(\[{"EventItemId":1,"EventItemGuid":"sample string 2","EventItemLastModifiedUtc":"2024-12-11T17:54:34.6886024-05:00","EventItemRowVersion":"QEA=","EventItemEventId":4,"EventItemAgendaSequence":1,"EventItemMinutesSequence":1,"EventItemAgendaNumber":"sample string 5","EventItemVideo":1,"EventItemVideoIndex":1,"EventItemVersion":"sample string 6","EventItemAgendaNote":"sample string 7","EventItemMinutesNote":"sample string 8","EventItemActionId":1,"EventItemActionName":"sample string 9","EventItemActionText":"sample string 10","EventItemPassedFlag":1,"EventItemPassedFlagName":"sample string 11","EventItemRollCallFlag":1,"EventItemFlagExtra":1,"EventItemTitle":"sample string 12","EventItemTally":"sample string 13","EventItemAccelaRecordId":"sample string 14","EventItemConsent":15,"EventItemMoverId":1,"EventItemMover":"sample string 16","EventItemSeconderId":1,"EventItemSeconder":"sample string 17","EventItemMatterId":1,"EventItemMatterGuid":"sample string 18","EventItemMatterFile":"sample string 19","EventItemMatterName":"sample string 20","EventItemMatterType":"sample string 21","EventItemMatterStatus":"sample string 22","EventItemMatterAttachments":\[{"MatterAttachmentId":1,"MatterAttachmentGuid":"sample string 2","MatterAttachmentLastModifiedUtc":"2024-12-11T17:54:34.6886024-05:00","MatterAttachmentRowVersion":"QEA=","MatterAttachmentName":"sample string 4","MatterAttachmentHyperlink":"sample string 5","MatterAttachmentFileName":"sample string 6","MatterAttachmentMatterVersion":"sample string 7","MatterAttachmentIsHyperlink":true,"MatterAttachmentBinary":"QEA=","MatterAttachmentIsSupportingDocument":true,"MatterAttachmentShowOnInternetPage":true,"MatterAttachmentIsMinuteOrder":true,"MatterAttachmentIsBoardLetter":true,"MatterAttachmentAgiloftId":13,"MatterAttachmentDescription":"sample string 14","MatterAttachmentPrintWithReports":true,"MatterAttachmentSort":16},{"MatterAttachmentId":1,"MatterAttachmentGuid":"sample string 2","MatterAttachmentLastModifiedUtc":"2024-12-11T17:54:34.6886024-05:00","MatterAttachmentRowVersion":"QEA=","MatterAttachmentName":"sample string 4","MatterAttachmentHyperlink":"sample string 5","MatterAttachmentFileName":"sample string 6","MatterAttachmentMatterVersion":"sample string 7","MatterAttachmentIsHyperlink":true,"MatterAttachmentBinary":"QEA=","MatterAttachmentIsSupportingDocument":true,"MatterAttachmentShowOnInternetPage":true,"MatterAttachmentIsMinuteOrder":true,"MatterAttachmentIsBoardLetter":true,"MatterAttachmentAgiloftId":13,"MatterAttachmentDescription":"sample string 14","MatterAttachmentPrintWithReports":true,"MatterAttachmentSort":16}\]},{"EventItemId":1,"EventItemGuid":"sample string 2","EventItemLastModifiedUtc":"2024-12-11T17:54:34.6886024-05:00","EventItemRowVersion":"QEA=","EventItemEventId":4,"EventItemAgendaSequence":1,"EventItemMinutesSequence":1,"EventItemAgendaNumber":"sample string 5","EventItemVideo":1,"EventItemVideoIndex":1,"EventItemVersion":"sample string 6","EventItemAgendaNote":"sample string 7","EventItemMinutesNote":"sample string 8","EventItemActionId":1,"EventItemActionName":"sample string 9","EventItemActionText":"sample string 10","EventItemPassedFlag":1,"EventItemPassedFlagName":"sample string 11","EventItemRollCallFlag":1,"EventItemFlagExtra":1,"EventItemTitle":"sample string 12","EventItemTally":"sample string 13","EventItemAccelaRecordId":"sample string 14","EventItemConsent":15,"EventItemMoverId":1,"EventItemMover":"sample string 16","EventItemSeconderId":1,"EventItemSeconder":"sample string 17","EventItemMatterId":1,"EventItemMatterGuid":"sample string 18","EventItemMatterFile":"sample string 19","EventItemMatterName":"sample string 20","EventItemMatterType":"sample string 21","EventItemMatterStatus":"sample string 22","EventItemMatterAttachments":\[{"MatterAttachmentId":1,"MatterAttachmentGuid":"sample string 2","MatterAttachmentLastModifiedUtc":"2024-12-11T17:54:34.6886024-05:00","MatterAttachmentRowVersion":"QEA=","MatterAttachmentName":"sample string 4","MatterAttachmentHyperlink":"sample string 5","MatterAttachmentFileName":"sample string 6","MatterAttachmentMatterVersion":"sample string 7","MatterAttachmentIsHyperlink":true,"MatterAttachmentBinary":"QEA=","MatterAttachmentIsSupportingDocument":true,"MatterAttachmentShowOnInternetPage":true,"MatterAttachmentIsMinuteOrder":true,"MatterAttachmentIsBoardLetter":true,"MatterAttachmentAgiloftId":13,"MatterAttachmentDescription":"sample string 14","MatterAttachmentPrintWithReports":true,"MatterAttachmentSort":16},{"MatterAttachmentId":1,"MatterAttachmentGuid":"sample string 2","MatterAttachmentLastModifiedUtc":"2024-12-11T17:54:34.6886024-05:00","MatterAttachmentRowVersion":"QEA=","MatterAttachmentName":"sample string 4","MatterAttachmentHyperlink":"sample string 5","MatterAttachmentFileName":"sample string 6","MatterAttachmentMatterVersion":"sample string 7","MatterAttachmentIsHyperlink":true,"MatterAttachmentBinary":"QEA=","MatterAttachmentIsSupportingDocument":true,"MatterAttachmentShowOnInternetPage":true,"MatterAttachmentIsMinuteOrder":true,"MatterAttachmentIsBoardLetter":true,"MatterAttachmentAgiloftId":13,"MatterAttachmentDescription":"sample string 14","MatterAttachmentPrintWithReports":true,"MatterAttachmentSort":16}\]}\]);

Title: GET v1/{Client}/CodeSections/{CodeSectionId}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-CodeSections-CodeSectionId

Markdown Content:
Gets one Code Section.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| CodeSectionId | The Id of the Code Section.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

[GranicusCodeSection](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusCodeSection)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| CodeSectionId |  | integer | None.
 |
| CodeSectionGuid |  | string | None.

 |
| CodeSectionLastModifiedUtc |  | date | None.

 |
| CodeSectionRowVersion |  | Collection of byte | None.

 |
| CodeSectionNumber |  | string | None.

 |
| CodeSectionName |  | string | None.

 |
| CodeSectionActiveFlag |  | integer | None.

 |
| CodeSectionUsedFlag |  | integer | None.

 |

### Response Formats

**Sample:**

{
  "CodeSectionId": 1,
  "CodeSectionGuid": "sample string 2",
  "CodeSectionLastModifiedUtc": "2024-12-11T17:54:06.3874726-05:00",
  "CodeSectionRowVersion": "QEA=",
  "CodeSectionNumber": "sample string 4",
  "CodeSectionName": "sample string 5",
  "CodeSectionActiveFlag": 6,
  "CodeSectionUsedFlag": 7
}

**Sample:**

<GranicusCodeSection xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <CodeSectionActiveFlag\>6</CodeSectionActiveFlag\>
  <CodeSectionGuid\>sample string 2</CodeSectionGuid\>
  <CodeSectionId\>1</CodeSectionId\>
  <CodeSectionLastModifiedUtc\>2024-12-11T17:54:06.3874726-05:00</CodeSectionLastModifiedUtc\>
  <CodeSectionName\>sample string 5</CodeSectionName\>
  <CodeSectionNumber\>sample string 4</CodeSectionNumber\>
  <CodeSectionRowVersion\>QEA=</CodeSectionRowVersion\>
  <CodeSectionUsedFlag\>7</CodeSectionUsedFlag\>
</GranicusCodeSection\>

**Sample:**

({"CodeSectionId":1,"CodeSectionGuid":"sample string 2","CodeSectionLastModifiedUtc":"2024-12-11T17:54:06.3874726-05:00","CodeSectionRowVersion":"QEA=","CodeSectionNumber":"sample string 4","CodeSectionName":"sample string 5","CodeSectionActiveFlag":6,"CodeSectionUsedFlag":7});

Title: GET v1/{Client}/CodeSections

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-CodeSections

Markdown Content:
Gets all Code Sections.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusCodeSection](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusCodeSection)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| CodeSectionId |  | integer | None.
 |
| CodeSectionGuid |  | string | None.

 |
| CodeSectionLastModifiedUtc |  | date | None.

 |
| CodeSectionRowVersion |  | Collection of byte | None.

 |
| CodeSectionNumber |  | string | None.

 |
| CodeSectionName |  | string | None.

 |
| CodeSectionActiveFlag |  | integer | None.

 |
| CodeSectionUsedFlag |  | integer | None.

 |

### Response Formats

**Sample:**

\[
  {
    "CodeSectionId": 1,
    "CodeSectionGuid": "sample string 2",
    "CodeSectionLastModifiedUtc": "2024-12-11T17:53:48.3795661-05:00",
    "CodeSectionRowVersion": "QEA=",
    "CodeSectionNumber": "sample string 4",
    "CodeSectionName": "sample string 5",
    "CodeSectionActiveFlag": 6,
    "CodeSectionUsedFlag": 7
  },
  {
    "CodeSectionId": 1,
    "CodeSectionGuid": "sample string 2",
    "CodeSectionLastModifiedUtc": "2024-12-11T17:53:48.3795661-05:00",
    "CodeSectionRowVersion": "QEA=",
    "CodeSectionNumber": "sample string 4",
    "CodeSectionName": "sample string 5",
    "CodeSectionActiveFlag": 6,
    "CodeSectionUsedFlag": 7
  }
\]

**Sample:**

<ArrayOfGranicusCodeSection xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusCodeSection\>
    <CodeSectionActiveFlag\>6</CodeSectionActiveFlag\>
    <CodeSectionGuid\>sample string 2</CodeSectionGuid\>
    <CodeSectionId\>1</CodeSectionId\>
    <CodeSectionLastModifiedUtc\>2024-12-11T17:53:48.3795661-05:00</CodeSectionLastModifiedUtc\>
    <CodeSectionName\>sample string 5</CodeSectionName\>
    <CodeSectionNumber\>sample string 4</CodeSectionNumber\>
    <CodeSectionRowVersion\>QEA=</CodeSectionRowVersion\>
    <CodeSectionUsedFlag\>7</CodeSectionUsedFlag\>
  </GranicusCodeSection\>
  <GranicusCodeSection\>
    <CodeSectionActiveFlag\>6</CodeSectionActiveFlag\>
    <CodeSectionGuid\>sample string 2</CodeSectionGuid\>
    <CodeSectionId\>1</CodeSectionId\>
    <CodeSectionLastModifiedUtc\>2024-12-11T17:53:48.3795661-05:00</CodeSectionLastModifiedUtc\>
    <CodeSectionName\>sample string 5</CodeSectionName\>
    <CodeSectionNumber\>sample string 4</CodeSectionNumber\>
    <CodeSectionRowVersion\>QEA=</CodeSectionRowVersion\>
    <CodeSectionUsedFlag\>7</CodeSectionUsedFlag\>
  </GranicusCodeSection\>
</ArrayOfGranicusCodeSection\>

**Sample:**

(\[{"CodeSectionId":1,"CodeSectionGuid":"sample string 2","CodeSectionLastModifiedUtc":"2024-12-11T17:53:48.3795661-05:00","CodeSectionRowVersion":"QEA=","CodeSectionNumber":"sample string 4","CodeSectionName":"sample string 5","CodeSectionActiveFlag":6,"CodeSectionUsedFlag":7},{"CodeSectionId":1,"CodeSectionGuid":"sample string 2","CodeSectionLastModifiedUtc":"2024-12-11T17:53:48.3795661-05:00","CodeSectionRowVersion":"QEA=","CodeSectionNumber":"sample string 4","CodeSectionName":"sample string 5","CodeSectionActiveFlag":6,"CodeSectionUsedFlag":7}\]);

Title: GET v1/{Client}/BodyTypes/{BodyTypeId}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-BodyTypes-BodyTypeId

Markdown Content:
Gets one Body Type.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| BodyTypeId | The Id of the Body Type.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

[GranicusBodyType](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusBodyType)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| BodyTypeId |  | integer | None.
 |
| BodyTypeGuid |  | string | None.

 |
| BodyTypeLastModifiedUtc |  | date | None.

 |
| BodyTypeRowVersion |  | Collection of byte | None.

 |
| BodyTypeName |  | string | Required

 |

### Response Formats

**Sample:**

{
  "BodyTypeId": 1,
  "BodyTypeGuid": "sample string 2",
  "BodyTypeLastModifiedUtc": "2024-12-11T17:53:35.950908-05:00",
  "BodyTypeRowVersion": "QEA=",
  "BodyTypeName": "sample string 4"
}

**Sample:**

<GranicusBodyType xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <BodyTypeGuid\>sample string 2</BodyTypeGuid\>
  <BodyTypeId\>1</BodyTypeId\>
  <BodyTypeLastModifiedUtc\>2024-12-11T17:53:35.950908-05:00</BodyTypeLastModifiedUtc\>
  <BodyTypeName\>sample string 4</BodyTypeName\>
  <BodyTypeRowVersion\>QEA=</BodyTypeRowVersion\>
</GranicusBodyType\>

**Sample:**

({"BodyTypeId":1,"BodyTypeGuid":"sample string 2","BodyTypeLastModifiedUtc":"2024-12-11T17:53:35.950908-05:00","BodyTypeRowVersion":"QEA=","BodyTypeName":"sample string 4"});

Title: GET v1/{Client}/BodyTypes

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-BodyTypes

Markdown Content:
Gets all Body Types.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusBodyType](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusBodyType)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| BodyTypeId |  | integer | None.
 |
| BodyTypeGuid |  | string | None.

 |
| BodyTypeLastModifiedUtc |  | date | None.

 |
| BodyTypeRowVersion |  | Collection of byte | None.

 |
| BodyTypeName |  | string | Required

 |

### Response Formats

**Sample:**

\[
  {
    "BodyTypeId": 1,
    "BodyTypeGuid": "sample string 2",
    "BodyTypeLastModifiedUtc": "2024-12-11T17:53:21.9918879-05:00",
    "BodyTypeRowVersion": "QEA=",
    "BodyTypeName": "sample string 4"
  },
  {
    "BodyTypeId": 1,
    "BodyTypeGuid": "sample string 2",
    "BodyTypeLastModifiedUtc": "2024-12-11T17:53:21.9918879-05:00",
    "BodyTypeRowVersion": "QEA=",
    "BodyTypeName": "sample string 4"
  }
\]

**Sample:**

<ArrayOfGranicusBodyType xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusBodyType\>
    <BodyTypeGuid\>sample string 2</BodyTypeGuid\>
    <BodyTypeId\>1</BodyTypeId\>
    <BodyTypeLastModifiedUtc\>2024-12-11T17:53:21.9918879-05:00</BodyTypeLastModifiedUtc\>
    <BodyTypeName\>sample string 4</BodyTypeName\>
    <BodyTypeRowVersion\>QEA=</BodyTypeRowVersion\>
  </GranicusBodyType\>
  <GranicusBodyType\>
    <BodyTypeGuid\>sample string 2</BodyTypeGuid\>
    <BodyTypeId\>1</BodyTypeId\>
    <BodyTypeLastModifiedUtc\>2024-12-11T17:53:21.9918879-05:00</BodyTypeLastModifiedUtc\>
    <BodyTypeName\>sample string 4</BodyTypeName\>
    <BodyTypeRowVersion\>QEA=</BodyTypeRowVersion\>
  </GranicusBodyType\>
</ArrayOfGranicusBodyType\>

**Sample:**

(\[{"BodyTypeId":1,"BodyTypeGuid":"sample string 2","BodyTypeLastModifiedUtc":"2024-12-11T17:53:21.9918879-05:00","BodyTypeRowVersion":"QEA=","BodyTypeName":"sample string 4"},{"BodyTypeId":1,"BodyTypeGuid":"sample string 2","BodyTypeLastModifiedUtc":"2024-12-11T17:53:21.9918879-05:00","BodyTypeRowVersion":"QEA=","BodyTypeName":"sample string 4"}\]);

Title: GET v1/{Client}/Bodies/{BodyId}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Bodies-BodyId

Markdown Content:
Gets one Body.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| BodyId | The BodyId of the Body.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

[GranicusBody](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusBody)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| BodyId |  | integer | None.
 |
| BodyGuid |  | string | None.

 |
| BodyLastModifiedUtc |  | date | None.

 |
| BodyRowVersion |  | Collection of byte | None.

 |
| BodyName |  | string | Required

String length: inclusive between 1 and 255

 |
| BodyTypeId |  | integer | Required

 |
| BodyTypeName |  | string | None.

 |
| BodyMeetFlag |  | integer | None.

 |
| BodyActiveFlag |  | integer | None.

 |
| BodySort |  | integer | None.

 |
| BodyDescription |  | string | None.

 |
| BodyContactNameId |  | integer | None.

 |
| BodyContactFullName |  | string | None.

 |
| BodyContactPhone |  | string | None.

 |
| BodyContactEmail |  | string | None.

 |
| BodyUsedControlFlag |  | integer | None.

 |
| BodyNumberOfMembers |  | integer | None.

 |
| BodyUsedActingFlag |  | integer | None.

 |
| BodyUsedTargetFlag |  | integer | None.

 |
| BodyUsedSponsorFlag |  | integer | None.

 |

### Response Formats

**Sample:**

{
  "BodyId": 1,
  "BodyGuid": "sample string 2",
  "BodyLastModifiedUtc": "2024-12-11T17:45:12.7342751-05:00",
  "BodyRowVersion": "QEA=",
  "BodyName": "sample string 4",
  "BodyTypeId": 5,
  "BodyTypeName": "sample string 6",
  "BodyMeetFlag": 7,
  "BodyActiveFlag": 8,
  "BodySort": 9,
  "BodyDescription": "sample string 10",
  "BodyContactNameId": 1,
  "BodyContactFullName": "sample string 11",
  "BodyContactPhone": "sample string 12",
  "BodyContactEmail": "sample string 13",
  "BodyUsedControlFlag": 14,
  "BodyNumberOfMembers": 15,
  "BodyUsedActingFlag": 16,
  "BodyUsedTargetFlag": 17,
  "BodyUsedSponsorFlag": 18
}

**Sample:**

<GranicusBody xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <BodyActiveFlag\>8</BodyActiveFlag\>
  <BodyContactEmail\>sample string 13</BodyContactEmail\>
  <BodyContactFullName\>sample string 11</BodyContactFullName\>
  <BodyContactNameId\>1</BodyContactNameId\>
  <BodyContactPhone\>sample string 12</BodyContactPhone\>
  <BodyDescription\>sample string 10</BodyDescription\>
  <BodyGuid\>sample string 2</BodyGuid\>
  <BodyId\>1</BodyId\>
  <BodyLastModifiedUtc\>2024-12-11T17:45:12.7342751-05:00</BodyLastModifiedUtc\>
  <BodyMeetFlag\>7</BodyMeetFlag\>
  <BodyName\>sample string 4</BodyName\>
  <BodyNumberOfMembers\>15</BodyNumberOfMembers\>
  <BodyRowVersion\>QEA=</BodyRowVersion\>
  <BodySort\>9</BodySort\>
  <BodyTypeId\>5</BodyTypeId\>
  <BodyTypeName\>sample string 6</BodyTypeName\>
  <BodyUsedActingFlag\>16</BodyUsedActingFlag\>
  <BodyUsedControlFlag\>14</BodyUsedControlFlag\>
  <BodyUsedSponsorFlag\>18</BodyUsedSponsorFlag\>
  <BodyUsedTargetFlag\>17</BodyUsedTargetFlag\>
</GranicusBody\>

**Sample:**

({"BodyId":1,"BodyGuid":"sample string 2","BodyLastModifiedUtc":"2024-12-11T17:45:12.7342751-05:00","BodyRowVersion":"QEA=","BodyName":"sample string 4","BodyTypeId":5,"BodyTypeName":"sample string 6","BodyMeetFlag":7,"BodyActiveFlag":8,"BodySort":9,"BodyDescription":"sample string 10","BodyContactNameId":1,"BodyContactFullName":"sample string 11","BodyContactPhone":"sample string 12","BodyContactEmail":"sample string 13","BodyUsedControlFlag":14,"BodyNumberOfMembers":15,"BodyUsedActingFlag":16,"BodyUsedTargetFlag":17,"BodyUsedSponsorFlag":18});

Title: GET v1/{Client}/Bodies

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Bodies

Markdown Content:
Gets all Bodies.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

Collection of [GranicusBody](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusBody)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| BodyId |  | integer | None.
 |
| BodyGuid |  | string | None.

 |
| BodyLastModifiedUtc |  | date | None.

 |
| BodyRowVersion |  | Collection of byte | None.

 |
| BodyName |  | string | Required

String length: inclusive between 1 and 255

 |
| BodyTypeId |  | integer | Required

 |
| BodyTypeName |  | string | None.

 |
| BodyMeetFlag |  | integer | None.

 |
| BodyActiveFlag |  | integer | None.

 |
| BodySort |  | integer | None.

 |
| BodyDescription |  | string | None.

 |
| BodyContactNameId |  | integer | None.

 |
| BodyContactFullName |  | string | None.

 |
| BodyContactPhone |  | string | None.

 |
| BodyContactEmail |  | string | None.

 |
| BodyUsedControlFlag |  | integer | None.

 |
| BodyNumberOfMembers |  | integer | None.

 |
| BodyUsedActingFlag |  | integer | None.

 |
| BodyUsedTargetFlag |  | integer | None.

 |
| BodyUsedSponsorFlag |  | integer | None.

 |

### Response Formats

**Sample:**

\[
  {
    "BodyId": 1,
    "BodyGuid": "sample string 2",
    "BodyLastModifiedUtc": "2024-12-11T17:45:07.9787688-05:00",
    "BodyRowVersion": "QEA=",
    "BodyName": "sample string 4",
    "BodyTypeId": 5,
    "BodyTypeName": "sample string 6",
    "BodyMeetFlag": 7,
    "BodyActiveFlag": 8,
    "BodySort": 9,
    "BodyDescription": "sample string 10",
    "BodyContactNameId": 1,
    "BodyContactFullName": "sample string 11",
    "BodyContactPhone": "sample string 12",
    "BodyContactEmail": "sample string 13",
    "BodyUsedControlFlag": 14,
    "BodyNumberOfMembers": 15,
    "BodyUsedActingFlag": 16,
    "BodyUsedTargetFlag": 17,
    "BodyUsedSponsorFlag": 18
  },
  {
    "BodyId": 1,
    "BodyGuid": "sample string 2",
    "BodyLastModifiedUtc": "2024-12-11T17:45:07.9787688-05:00",
    "BodyRowVersion": "QEA=",
    "BodyName": "sample string 4",
    "BodyTypeId": 5,
    "BodyTypeName": "sample string 6",
    "BodyMeetFlag": 7,
    "BodyActiveFlag": 8,
    "BodySort": 9,
    "BodyDescription": "sample string 10",
    "BodyContactNameId": 1,
    "BodyContactFullName": "sample string 11",
    "BodyContactPhone": "sample string 12",
    "BodyContactEmail": "sample string 13",
    "BodyUsedControlFlag": 14,
    "BodyNumberOfMembers": 15,
    "BodyUsedActingFlag": 16,
    "BodyUsedTargetFlag": 17,
    "BodyUsedSponsorFlag": 18
  }
\]

**Sample:**

<ArrayOfGranicusBody xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <GranicusBody\>
    <BodyActiveFlag\>8</BodyActiveFlag\>
    <BodyContactEmail\>sample string 13</BodyContactEmail\>
    <BodyContactFullName\>sample string 11</BodyContactFullName\>
    <BodyContactNameId\>1</BodyContactNameId\>
    <BodyContactPhone\>sample string 12</BodyContactPhone\>
    <BodyDescription\>sample string 10</BodyDescription\>
    <BodyGuid\>sample string 2</BodyGuid\>
    <BodyId\>1</BodyId\>
    <BodyLastModifiedUtc\>2024-12-11T17:45:07.9787688-05:00</BodyLastModifiedUtc\>
    <BodyMeetFlag\>7</BodyMeetFlag\>
    <BodyName\>sample string 4</BodyName\>
    <BodyNumberOfMembers\>15</BodyNumberOfMembers\>
    <BodyRowVersion\>QEA=</BodyRowVersion\>
    <BodySort\>9</BodySort\>
    <BodyTypeId\>5</BodyTypeId\>
    <BodyTypeName\>sample string 6</BodyTypeName\>
    <BodyUsedActingFlag\>16</BodyUsedActingFlag\>
    <BodyUsedControlFlag\>14</BodyUsedControlFlag\>
    <BodyUsedSponsorFlag\>18</BodyUsedSponsorFlag\>
    <BodyUsedTargetFlag\>17</BodyUsedTargetFlag\>
  </GranicusBody\>
  <GranicusBody\>
    <BodyActiveFlag\>8</BodyActiveFlag\>
    <BodyContactEmail\>sample string 13</BodyContactEmail\>
    <BodyContactFullName\>sample string 11</BodyContactFullName\>
    <BodyContactNameId\>1</BodyContactNameId\>
    <BodyContactPhone\>sample string 12</BodyContactPhone\>
    <BodyDescription\>sample string 10</BodyDescription\>
    <BodyGuid\>sample string 2</BodyGuid\>
    <BodyId\>1</BodyId\>
    <BodyLastModifiedUtc\>2024-12-11T17:45:07.9787688-05:00</BodyLastModifiedUtc\>
    <BodyMeetFlag\>7</BodyMeetFlag\>
    <BodyName\>sample string 4</BodyName\>
    <BodyNumberOfMembers\>15</BodyNumberOfMembers\>
    <BodyRowVersion\>QEA=</BodyRowVersion\>
    <BodySort\>9</BodySort\>
    <BodyTypeId\>5</BodyTypeId\>
    <BodyTypeName\>sample string 6</BodyTypeName\>
    <BodyUsedActingFlag\>16</BodyUsedActingFlag\>
    <BodyUsedControlFlag\>14</BodyUsedControlFlag\>
    <BodyUsedSponsorFlag\>18</BodyUsedSponsorFlag\>
    <BodyUsedTargetFlag\>17</BodyUsedTargetFlag\>
  </GranicusBody\>
</ArrayOfGranicusBody\>

**Sample:**

(\[{"BodyId":1,"BodyGuid":"sample string 2","BodyLastModifiedUtc":"2024-12-11T17:45:07.9787688-05:00","BodyRowVersion":"QEA=","BodyName":"sample string 4","BodyTypeId":5,"BodyTypeName":"sample string 6","BodyMeetFlag":7,"BodyActiveFlag":8,"BodySort":9,"BodyDescription":"sample string 10","BodyContactNameId":1,"BodyContactFullName":"sample string 11","BodyContactPhone":"sample string 12","BodyContactEmail":"sample string 13","BodyUsedControlFlag":14,"BodyNumberOfMembers":15,"BodyUsedActingFlag":16,"BodyUsedTargetFlag":17,"BodyUsedSponsorFlag":18},{"BodyId":1,"BodyGuid":"sample string 2","BodyLastModifiedUtc":"2024-12-11T17:45:07.9787688-05:00","BodyRowVersion":"QEA=","BodyName":"sample string 4","BodyTypeId":5,"BodyTypeName":"sample string 6","BodyMeetFlag":7,"BodyActiveFlag":8,"BodySort":9,"BodyDescription":"sample string 10","BodyContactNameId":1,"BodyContactFullName":"sample string 11","BodyContactPhone":"sample string 12","BodyContactEmail":"sample string 13","BodyUsedControlFlag":14,"BodyNumberOfMembers":15,"BodyUsedActingFlag":16,"BodyUsedTargetFlag":17,"BodyUsedSponsorFlag":18}\]);

Title: POST v1/{Client}/Actions

URL Source: https://webapi.legistar.com/Help/Api/POST-v1-Client-Actions

Markdown Content:
Adds one Action.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |

### Body Parameters

GranicusAction object to be inserted. Note that ActionID is not required to be set.

[GranicusAction](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusAction)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| ActionId |  | integer | None.
 |
| ActionGuid |  | string | None.

 |
| ActionLastModifiedUtc |  | date | None.

 |
| ActionRowVersion |  | Collection of byte | None.

 |
| ActionName |  | string | Required

String length: inclusive between 1 and 255

 |
| ActionActiveFlag |  | integer | None.

 |
| ActionUsedFlag |  | integer | None.

 |

### Request Formats

**Sample:**

{
  "ActionId": 1,
  "ActionGuid": "sample string 2",
  "ActionLastModifiedUtc": "2024-12-11T17:52:39.7020407-05:00",
  "ActionRowVersion": "QEA=",
  "ActionName": "sample string 4",
  "ActionActiveFlag": 5,
  "ActionUsedFlag": 6
}

**Sample:**

<GranicusAction xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <ActionActiveFlag\>5</ActionActiveFlag\>
  <ActionGuid\>sample string 2</ActionGuid\>
  <ActionId\>1</ActionId\>
  <ActionLastModifiedUtc\>2024-12-11T17:52:39.7020407-05:00</ActionLastModifiedUtc\>
  <ActionName\>sample string 4</ActionName\>
  <ActionRowVersion\>QEA=</ActionRowVersion\>
  <ActionUsedFlag\>6</ActionUsedFlag\>
</GranicusAction\>

**Sample:**

Sample not available.

Response Information
--------------------

### Resource Description

Returns Id of a created Action as a string value when Accept header is "text/plain"; otherwise returns created Action as an object.

[HttpResponseMessage](https://webapi.legistar.com/Help/ResourceModel?modelName=HttpResponseMessage)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Version |  | [Version](https://webapi.legistar.com/Help/ResourceModel?modelName=Version) | None.
 |
| Content |  | [HttpContent](https://webapi.legistar.com/Help/ResourceModel?modelName=HttpContent) | None.

 |
| StatusCode |  | [HttpStatusCode](https://webapi.legistar.com/Help/ResourceModel?modelName=HttpStatusCode) | None.

 |
| ReasonPhrase |  | string | None.

 |
| Headers |  | Collection of Object | None.

 |
| RequestMessage |  | [HttpRequestMessage](https://webapi.legistar.com/Help/ResourceModel?modelName=HttpRequestMessage) | None.

 |
| IsSuccessStatusCode |  | boolean | None.

 |

Title: GET v1/{Client}/Actions/{ActionId}

URL Source: https://webapi.legistar.com/Help/Api/GET-v1-Client-Actions-ActionId

Markdown Content:
Gets one Action.

Request Information
-------------------

### URI Parameters

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| Client | The code of the Client database to connect to.
 | string | Required

 |
| ActionId | The Id of the Action.

 | integer | Required

 |

### Body Parameters

None.

Response Information
--------------------

### Resource Description

[GranicusAction](https://webapi.legistar.com/Help/ResourceModel?modelName=GranicusAction)

| Name | Description | Type | Additional information |
| --- | --- | --- | --- |
| ActionId |  | integer | None.
 |
| ActionGuid |  | string | None.

 |
| ActionLastModifiedUtc |  | date | None.

 |
| ActionRowVersion |  | Collection of byte | None.

 |
| ActionName |  | string | Required

String length: inclusive between 1 and 255

 |
| ActionActiveFlag |  | integer | None.

 |
| ActionUsedFlag |  | integer | None.

 |

### Response Formats

**Sample:**

{
  "ActionId": 1,
  "ActionGuid": "sample string 2",
  "ActionLastModifiedUtc": "2024-12-11T17:20:26.7269474-05:00",
  "ActionRowVersion": "QEA=",
  "ActionName": "sample string 4",
  "ActionActiveFlag": 5,
  "ActionUsedFlag": 6
}

**Sample:**

<GranicusAction xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/LegistarWebAPI.Models.v1"\>
  <ActionActiveFlag\>5</ActionActiveFlag\>
  <ActionGuid\>sample string 2</ActionGuid\>
  <ActionId\>1</ActionId\>
  <ActionLastModifiedUtc\>2024-12-11T17:20:26.7269474-05:00</ActionLastModifiedUtc\>
  <ActionName\>sample string 4</ActionName\>
  <ActionRowVersion\>QEA=</ActionRowVersion\>
  <ActionUsedFlag\>6</ActionUsedFlag\>
</GranicusAction\>

**Sample:**

({"ActionId":1,"ActionGuid":"sample string 2","ActionLastModifiedUtc":"2024-12-11T17:20:26.7269474-05:00","ActionRowVersion":"QEA=","ActionName":"sample string 4","ActionActiveFlag":5,"ActionUsedFlag":6});
