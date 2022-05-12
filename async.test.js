function fetchData(action) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (action === "success") {
        resolve("peanut butter");
      } else {
        reject("error");
      }
    }, 100);
  });
}

async function fetchData2(action) {
  const wait = (timeToDelay) =>
    new Promise((resolve) => setTimeout(resolve, timeToDelay));
  await wait(100);
  if (action === "success") {
    return "peanut butter";
  } else {
    return "error";
  }
}

test("the data is peanut butter", () => {
  expect.assertions(1);
  return fetchData2("success").then((res) => {
    expect(res).toBe("peanut butter");
  });
});

test("the data is peanut butter", async () => {
  expect.assertions(1);
  const res = await fetchData("success");
  expect(res).toBe("peanut butter");
});

test("the data is peanut butter", async () => {
  expect.assertions(1);
  await expect(fetchData("success")).resolves.toBe("peanut butter");
});

it("tests error with promises", () => {
  expect.assertions(1);
  return fetchData("fail").catch((e) => expect(e).toMatch("error"));
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await fetchData("fail");
  } catch (e) {
    expect(e).toMatch("error");
  }
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  await expect(fetchData("fail")).rejects.toMatch("error");
});
