/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import createNode from "../../../../src/utils/dom/createNode";
import appendNode from "../../../../src/utils/dom/appendNode";
import removeNode from "../../../../src/utils/dom/removeNode";
import selectNodes from "../../../../src/utils/dom/selectNodes";

describe("removeNode", () => {
  it("should remove a node from head tag", () => {
    const node = createNode("style", { id: "remove" });

    removeNode(appendNode(document.head, node));

    expect(selectNodes("#remove").length).toEqual(0);
  });
});
