# Todorant Micro

Micro analytics server for [Todorant](https://todorant.com). Collects just the event data to later be used for userflow funnels.

## Installation and local launch

1. Clone this repo: `git clone https://github.com/backmeupplz/todorant-micro`
2. Launch the [mongo database](https://www.mongodb.com/) locally
3. Create `.env` with the environment variables listed below
4. Run `yarn install` in the root folder
5. Run `yarn develop`

And you should be good to go! Feel free to fork and submit pull requests.

## Environment variables

| Name    | Description               |
| ------- | ------------------------- |
| `MONGO` | URL of the mongo database |

Also, please, consider looking at `.env.sample`.

## Continuous integration

Any commit pushed to main gets deployed to [micro.todorant.com](https://micro.todorant.com) via [CI Ninja](https://github.com/backmeupplz/ci-ninja).
