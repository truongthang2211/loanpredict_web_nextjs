// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PythonShell } from "python-shell";

type Data = {
  name: string;
  data: string;
};
async function PredictRisk(args: string[]) {
  let options = {
    args,
  };
  const {
    success,
    err = "",
    results,
  } = await new Promise((resolve, reject) => {
    PythonShell.run("./predict/test.py", options, function (err, results) {
      if (err) {
        reject({ success: false, err });
      }
      console.log("PythonShell results: %j", results);

      resolve({ success: true, results });
    });
  });

  console.log("python call ends");

  if (!success) {
    console.log("Test Error: " + err);
    return;
  }

  console.log("The result is: " + results);
  return results;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const inputObject = JSON.parse(req.body);
    inputObject.house_ownship =
      inputObject.house_ownship == "No rent, no own"
        ? "norent_noown"
        : inputObject.house_ownship;
    const pre = await PredictRisk([
      inputObject.age,
      inputObject.exp,
      inputObject.marital.toLowerCase(),
      inputObject.house_ownship.toLowerCase(),
      inputObject.car_ownship.toLowerCase(),
      inputObject.profession,
      inputObject.city,
      inputObject.state,
      inputObject.job_years,
      inputObject.house_years,
      inputObject.model,
    ]);
    console.log(pre);
    res.status(200).json({ data: pre });
  } else {
    res.status(200).json({ name: "John Doe" });
  }
}
