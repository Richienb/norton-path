import test from "ava"
import nortonPath from "."

test("main", (t) => {
	t.true(nortonPath !== undefined)
})
