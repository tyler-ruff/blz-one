
function do_header(user){
    return `
        <header>
            <nav class="navbar bg-blue-100/50">
                <div class="flex-1">
                    <a title="Blazed One" href="/dashboard" class="btn btn-ghost group normal-case text-xl">
                        <img class="group-hover:opacity-75" src="https://blazed.sirv.com/logo/BLZ-blue.png?w=45&h=45" />
                    </a>
                </div>
                <div class="hidden md:flex dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar mr-3">
                    <div title="Not logged in." class="w-10 rounded-full">
                        ${ 
                            user.photoURL === null ? `<div class="avatar placeholder"><div class="text-neutral-content rounded-full w-8"><span class="text-2xl">${user.displayName.charAt(0)}</span></div></div>` : `<img referrerpolicy="no-referrer" src="${user.photoURL}" />`
                         }
                        
                    </div>
                </label>

                <ul tabindex="0" class="p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52 flex mt-36">
                    <li class="select-none btn-disabled bg-transparent">
                        <b class="text-gray-400">${user.displayName}.</b>
                    </li>
                    <li>
                        <a href="/dashboard" class="justify-between">
                            Profile
                        </a>
                    </li>
                    <li>
                        <a href="/dashboard?x=settings">
                            Settings
                        </a>
                    </li>
                    <li>
                        <a href="/logout">
                            Logout
                        </a>
                    </li>
                </ul>
                </div>
                <div class="flex md:hidden navbar-end drawer-content">
                    <label for="mobile-menu-drawer" class="btn btn-circle btn-primary drawer-button">
                        <svg id="burger-menu" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="currentColor" class="inline-flex w-5 h-5">
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                        </svg>
                    </label>
                </div>
            </nav>
            </header>
            <modal class="block md:hidden drawer">
            <input id="mobile-menu-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-side">
                <label for="mobile-menu-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <li class="pt-5 btn-disabled bg-transparent">
                        <p class="text-gray-500">
                            ${user.displayName}
                        </p>
                    </li>
                    <li>
                        <a href="/dashboard">
                            Profile
                        </a>
                    </li>
                    <li>
                        <a href="/dashboard?x=settings">
                            Settings
                        </a>
                    </li>
                    <li>
                        <a href="/logout">
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </modal>
    `;
}

function profile(user){
    return `${do_header(user)}
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
    </article>`;
}

function settings(user){
    return `${do_header(user)}
        <dialog id="new_email_modal" class="modal sm:modal-middle">
            <form id="new-email-form" method="dialog" class="modal-box">
                <h3 class="font-bold text-lg">
                    Edit your profile
                </h3>
                <div class="py-4">
                    <div class="form-control w-full max-w-xs">
                        <label class="label" for="field-new-email">
                            <span class="label-text">
                                New Email
                            </span>
                        </label>
                        <input type="email" id="field-new-email" placeholder="name@example.com" class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            <span class="label-text-alt">
                                Press Enter to Submit
                            </span>
                        </label>
                    </div>
                </div>
                <div class="modal-action pt-5">
                    <button class="btn">
                        Close
                    </button>
                </div>
            </form>
        </dialog>
        <article class="prose box-border p-10">
            <h2>
                Edit Profile
            </h2>
            <form id="settings-form">
                <div class="form-control w-full max-w-xs">
                    <div class="avatar">
                        ${ 
                            user.photoURL === null ? `<div class="avatar placeholder"><div class="text-neutral-content rounded-full w-8"><span class="text-2xl">${user.displayName.charAt(0)}</span></div></div>` : `<img referrerpolicy="no-referrer" src="${user.photoURL}" alt="Profile Picture" />`
                        }
                    </div>
                    <label class="label" for="field-picture-upload">
                        Upload new profile picture
                    </label>
                    <input type="file" id="field-picture-upload" accept="image/png, image/jpg, image/webp" class="file-input file-input-bordered w-full" />

                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label" for="field-display-name">
                        <span class="label-text">
                            Display Name
                        </span>
                    </label>
                    <input type="text" id="field-display-name" value="${user.displayName}" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label" for="field-email">
                        <span class="label-text">
                            Email
                        </span>
                    </label>
                    <input disabled type="email" id="field-email" value="${user.email}" class="input input-bordered w-full max-w-xs join-item" />
                    <label class="label">
                        <span onclick="new_email_modal.showModal()" class="label-text-alt btn btn-xs">
                            Edit Email
                        </span>
                    </label>
                </div>
                <br />
                <div class="form-control">
                    <button class="btn">
                        Update
                    </button>
                </div>
            </form>
        </article>
    `;
}

function finance(user){
    return `${do_header(user)}
    <article class="prose box-border p-10">
        <div class="stats bg-blue-700 text-primary-content">
        
            <div class="stat">
            <div class="stat-title">Account balance</div>
            <div class="stat-value">$89,400</div>
            <div class="stat-actions">
                <button class="btn btn-sm btn-success">Add funds</button>
            </div>
            </div>
            
            <div class="stat">
            <div class="stat-title">Current balance</div>
            <div class="stat-value">$89,400</div>
            <div class="stat-actions">
                <button class="btn btn-sm">Withdrawal</button> 
                <button class="btn btn-sm">deposit</button>
            </div>
            </div>
        </div>
        </article>
    `;
}