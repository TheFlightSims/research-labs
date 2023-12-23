# Research Labs

```markdown
This repository is a part of this project: Research Labs

See the main repo here: https://github.com/TheFlightSims/research-labs 
```

Provide and free-to-use web-based IDE for campus, team, and enterprise, with unlimited ability.

## Getting started

### With Docker container

Research Labs on Docker Container helps administrators deploy Research Labs faster, more securely, and at no additional costs.

For immediate use, try pulling, running, and exporting `8000` to your local port

```shell
docker run -p 443:443 theflightsims/researchlabs:latest
```

To save for later, try pulling this image only

```shell
docker pull theflightsims/researchlabs:latest
```

### Without Docker container (Recommended)

Research labs primarily use all-server, all-infrastructure (IaaS) for widespread deployment, more secure, and easier to maintain, operate, and handle disasters.

For a better understanding of how Research Labs can handle user data, code handling, and administration, see [CONTRIBUTING GUIDE](https://github.com/TheFlightSims/research-labs/blob/main/CONTRIBUTING.md).

> Note
>
> We recommend you install local scripts using `root` user only.
>
> DO NOT install it only non-admin users. You won't be able to install PyPI packages, MySQL database for storing user data, as well as administration modules.

#### Cloning & Installing Research Labs

Research Labs uses scriptings for fast deployment and removes most unnecessary files and folders that are not related directly to the Research Labs server operation (e.g. `.wiki`, `wsl-config`, and markdown files).

Cloning from GitHub first

```shell
git clone https://github.com/TheFlightSims/research-labs.git
```

Installing and Removing local git repo

```shell
cd research-labs
chmod +x ./master.sh
sudo ./master.sh
```

In the welcome screen, type `2` to start the standard installation. The setup will automatically install and configure your server.

While that, please don't touch on its process. The installation will be completed quickly.

> Note: We recommend you connect to a 50 Mbps or faster Internet connection, so your installation won't be corrupted by Internet speed.

#### Starting Research Labs

Start the service, using `service` command

```shell
sudo service researchlabs start 
```

Check the status

```shell
sudo service researchlabs status
```

By default, Research Labs will start at port `443` (with pre-installed SSL) on your local machine.

## Contributing

To contribute to this project, you can see different ways in [CONTRIBUTING GUIDE](https://github.com/TheFlightSims/research-labs/blob/main/CONTRIBUTING.md).

## License

This repo uses [GNU GPL-3.0](https://github.com/TheFlightSims/research-labs/blob/main/LICENSE) for easier distribution, modification, and installation on any device, with no fee, or additional law barrier.

## Feedback

To feedback this repository, go to [Issues](https://github.com/TheFlightSims/research-labs/blob/main/issues) or [join our Discord server]()
