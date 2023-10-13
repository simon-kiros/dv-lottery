import React from "react";

function DvCost() {
  return (
    <div>
      <table class="table ">
        <thead>
          <tr>
            <th scope="col">Fee Type</th>
            <th scope="col">Cost (to Applicat Living in the U.S.)</th>
            <th scope="col">Cost (to Applicant Living Abroad)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Family Sponsorship Form (I-130)</td>
            <td>$535</td>
            <td>$535</td>
          </tr>
          <tr>
            <td>Green Card Application Form (I-485)</td>
            <td>$1140</td>
            <td>$120</td>
          </tr>
          <tr>
            <td>Financial Support Form (I-864)</td>
            <td>$0</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>Work Permit Application Form (I-765) (optional)</td>
            <td>$0</td>
            <td>Not required</td>
          </tr>
          <tr>
            <td>Travel Permit Application Form (I-131) (optional)</td>
            <td>$0</td>
            <td>Not required</td>
          </tr>
          <tr>
            <td>Biometrics (Fingerprints & Photo)</td>
            <td>$85</td>
            <td>$0</td>
          </tr>
          <tr>
            <td>State Department Processing</td>
            <td>Not required</td>
            <td>$325</td>
          </tr>
          <tr>
            <td>USCIS Immigrant Fee</td>
            <td>Not required</td>
            <td>$220</td>
          </tr>
          <tr>
            <td>Medical Examination</td>
            <td>*Varies</td>
            <td>*Varies</td>
          </tr>
          <tr>
            <th scope="col">Total</th>
            <th scope="col">$1760</th>
            <th scope="col">$1200</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DvCost;
