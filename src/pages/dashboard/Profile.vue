<template>
    <article class="prose box box-border p-10">
        <h1 class="text-gray-700">
            Dashboard
        </h1>
        <div class="container">
            <h3>
                Bank Accounts
            </h3>
            <div class="overflow-x-auto">
                <table class="table">
                    <thead>
                        <th>
                            Bank Name
                        </th>
                        <th>
                            Account Type
                        </th>
                        <th>
                            Balance
                        </th>
                    </thead>
                    <tr>
                        <td>
                            Woodrow Financial
                        </td>
                        <td>
                            Checking
                        </td>
                        <td>
                            B$85,000
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Woodrow Financial
                        </td>
                        <td>
                            Credit Line
                        </td>
                        <td>
                            -B$2,000
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <a href="/dashboard?x=finance" class="btn btn-primary">
            View Financial Panel
        </a>
        <hr />
        <div class="container">
            <h3>
                Companies
            </h3>
            <div>
                <ul>
                    <li>
                        <a href="">
                            Woodrow Financial
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <hr />
        <div class="container">
            <h3>
                Spaces
            </h3>
            <div>
            <div class="overflow-x-auto">
            <table class="table">
              <!-- head -->
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                <!-- row 1 -->
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                <!-- row 2 -->
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                <!-- row 3 -->
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
            </div>
        </div>
    </article>
</template>