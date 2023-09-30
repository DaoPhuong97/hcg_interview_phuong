import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  items = [
    {
      id: 24195339,
      node_id: 'MDEwOlJlcG9zaXRvcnkyNDE5NTMzOQ==',
      name: 'angular',
      full_name: 'angular/angular',
      private: false,
      owner: {
        login: 'angular',
        id: 139426,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjEzOTQyNg==',
        avatar_url: 'https://avatars.githubusercontent.com/u/139426?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/angular',
        html_url: 'https://github.com/angular',
        followers_url: 'https://api.github.com/users/angular/followers',
        following_url:
          'https://api.github.com/users/angular/following{/other_user}',
        gists_url: 'https://api.github.com/users/angular/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/angular/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/angular/subscriptions',
        organizations_url: 'https://api.github.com/users/angular/orgs',
        repos_url: 'https://api.github.com/users/angular/repos',
        events_url: 'https://api.github.com/users/angular/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/angular/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/angular/angular',
      description: 'The modern web developer’s platform',
      fork: false,
      url: 'https://api.github.com/repos/angular/angular',
      forks_url: 'https://api.github.com/repos/angular/angular/forks',
      keys_url: 'https://api.github.com/repos/angular/angular/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/angular/angular/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/angular/angular/teams',
      hooks_url: 'https://api.github.com/repos/angular/angular/hooks',
      issue_events_url:
        'https://api.github.com/repos/angular/angular/issues/events{/number}',
      events_url: 'https://api.github.com/repos/angular/angular/events',
      assignees_url:
        'https://api.github.com/repos/angular/angular/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/angular/angular/branches{/branch}',
      tags_url: 'https://api.github.com/repos/angular/angular/tags',
      blobs_url: 'https://api.github.com/repos/angular/angular/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/angular/angular/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/angular/angular/git/refs{/sha}',
      trees_url: 'https://api.github.com/repos/angular/angular/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/angular/angular/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/angular/angular/languages',
      stargazers_url: 'https://api.github.com/repos/angular/angular/stargazers',
      contributors_url:
        'https://api.github.com/repos/angular/angular/contributors',
      subscribers_url:
        'https://api.github.com/repos/angular/angular/subscribers',
      subscription_url:
        'https://api.github.com/repos/angular/angular/subscription',
      commits_url: 'https://api.github.com/repos/angular/angular/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/angular/angular/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/angular/angular/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/angular/angular/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/angular/angular/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/angular/angular/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/angular/angular/merges',
      archive_url:
        'https://api.github.com/repos/angular/angular/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/angular/angular/downloads',
      issues_url:
        'https://api.github.com/repos/angular/angular/issues{/number}',
      pulls_url: 'https://api.github.com/repos/angular/angular/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/angular/angular/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/angular/angular/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/angular/angular/labels{/name}',
      releases_url:
        'https://api.github.com/repos/angular/angular/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/angular/angular/deployments',
      created_at: '2014-09-18T16:12:01Z',
      updated_at: '2023-09-29T23:15:55Z',
      pushed_at: '2023-09-30T01:13:42Z',
      git_url: 'git://github.com/angular/angular.git',
      ssh_url: 'git@github.com:angular/angular.git',
      clone_url: 'https://github.com/angular/angular.git',
      svn_url: 'https://github.com/angular/angular',
      homepage: 'https://angular.io',
      size: 474029,
      stargazers_count: 90447,
      watchers_count: 90447,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      has_discussions: true,
      forks_count: 24312,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 1535,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [
        'angular',
        'javascript',
        'pwa',
        'typescript',
        'web',
        'web-framework',
        'web-performance',
      ],
      visibility: 'public',
      forks: 24312,
      open_issues: 1535,
      watchers: 90447,
      default_branch: 'main',
      score: 1,
    },
    {
      id: 460078,
      node_id: 'MDEwOlJlcG9zaXRvcnk0NjAwNzg=',
      name: 'angular.js',
      full_name: 'angular/angular.js',
      private: false,
      owner: {
        login: 'angular',
        id: 139426,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjEzOTQyNg==',
        avatar_url: 'https://avatars.githubusercontent.com/u/139426?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/angular',
        html_url: 'https://github.com/angular',
        followers_url: 'https://api.github.com/users/angular/followers',
        following_url:
          'https://api.github.com/users/angular/following{/other_user}',
        gists_url: 'https://api.github.com/users/angular/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/angular/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/angular/subscriptions',
        organizations_url: 'https://api.github.com/users/angular/orgs',
        repos_url: 'https://api.github.com/users/angular/repos',
        events_url: 'https://api.github.com/users/angular/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/angular/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/angular/angular.js',
      description: 'AngularJS - HTML enhanced for web apps!',
      fork: false,
      url: 'https://api.github.com/repos/angular/angular.js',
      forks_url: 'https://api.github.com/repos/angular/angular.js/forks',
      keys_url: 'https://api.github.com/repos/angular/angular.js/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/angular/angular.js/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/angular/angular.js/teams',
      hooks_url: 'https://api.github.com/repos/angular/angular.js/hooks',
      issue_events_url:
        'https://api.github.com/repos/angular/angular.js/issues/events{/number}',
      events_url: 'https://api.github.com/repos/angular/angular.js/events',
      assignees_url:
        'https://api.github.com/repos/angular/angular.js/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/angular/angular.js/branches{/branch}',
      tags_url: 'https://api.github.com/repos/angular/angular.js/tags',
      blobs_url:
        'https://api.github.com/repos/angular/angular.js/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/angular/angular.js/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/angular/angular.js/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/angular/angular.js/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/angular/angular.js/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/angular/angular.js/languages',
      stargazers_url:
        'https://api.github.com/repos/angular/angular.js/stargazers',
      contributors_url:
        'https://api.github.com/repos/angular/angular.js/contributors',
      subscribers_url:
        'https://api.github.com/repos/angular/angular.js/subscribers',
      subscription_url:
        'https://api.github.com/repos/angular/angular.js/subscription',
      commits_url:
        'https://api.github.com/repos/angular/angular.js/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/angular/angular.js/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/angular/angular.js/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/angular/angular.js/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/angular/angular.js/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/angular/angular.js/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/angular/angular.js/merges',
      archive_url:
        'https://api.github.com/repos/angular/angular.js/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/angular/angular.js/downloads',
      issues_url:
        'https://api.github.com/repos/angular/angular.js/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/angular/angular.js/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/angular/angular.js/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/angular/angular.js/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/angular/angular.js/labels{/name}',
      releases_url:
        'https://api.github.com/repos/angular/angular.js/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/angular/angular.js/deployments',
      created_at: '2010-01-06T00:34:37Z',
      updated_at: '2023-09-29T23:15:56Z',
      pushed_at: '2022-04-12T15:57:22Z',
      git_url: 'git://github.com/angular/angular.js.git',
      ssh_url: 'git@github.com:angular/angular.js.git',
      clone_url: 'https://github.com/angular/angular.js.git',
      svn_url: 'https://github.com/angular/angular.js',
      homepage: 'https://angularjs.org',
      size: 101744,
      stargazers_count: 59082,
      watchers_count: 59082,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 28107,
      mirror_url: null,
      archived: true,
      disabled: false,
      open_issues_count: 464,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 28107,
      open_issues: 464,
      watchers: 59082,
      default_branch: 'master',
      score: 1,
    },
    {
      id: 36891867,
      node_id: 'MDEwOlJlcG9zaXRvcnkzNjg5MTg2Nw==',
      name: 'angular-cli',
      full_name: 'angular/angular-cli',
      private: false,
      owner: {
        login: 'angular',
        id: 139426,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjEzOTQyNg==',
        avatar_url: 'https://avatars.githubusercontent.com/u/139426?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/angular',
        html_url: 'https://github.com/angular',
        followers_url: 'https://api.github.com/users/angular/followers',
        following_url:
          'https://api.github.com/users/angular/following{/other_user}',
        gists_url: 'https://api.github.com/users/angular/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/angular/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/angular/subscriptions',
        organizations_url: 'https://api.github.com/users/angular/orgs',
        repos_url: 'https://api.github.com/users/angular/repos',
        events_url: 'https://api.github.com/users/angular/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/angular/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/angular/angular-cli',
      description: 'CLI tool for Angular',
      fork: false,
      url: 'https://api.github.com/repos/angular/angular-cli',
      forks_url: 'https://api.github.com/repos/angular/angular-cli/forks',
      keys_url:
        'https://api.github.com/repos/angular/angular-cli/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/angular/angular-cli/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/angular/angular-cli/teams',
      hooks_url: 'https://api.github.com/repos/angular/angular-cli/hooks',
      issue_events_url:
        'https://api.github.com/repos/angular/angular-cli/issues/events{/number}',
      events_url: 'https://api.github.com/repos/angular/angular-cli/events',
      assignees_url:
        'https://api.github.com/repos/angular/angular-cli/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/angular/angular-cli/branches{/branch}',
      tags_url: 'https://api.github.com/repos/angular/angular-cli/tags',
      blobs_url:
        'https://api.github.com/repos/angular/angular-cli/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/angular/angular-cli/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/angular/angular-cli/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/angular/angular-cli/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/angular/angular-cli/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/angular/angular-cli/languages',
      stargazers_url:
        'https://api.github.com/repos/angular/angular-cli/stargazers',
      contributors_url:
        'https://api.github.com/repos/angular/angular-cli/contributors',
      subscribers_url:
        'https://api.github.com/repos/angular/angular-cli/subscribers',
      subscription_url:
        'https://api.github.com/repos/angular/angular-cli/subscription',
      commits_url:
        'https://api.github.com/repos/angular/angular-cli/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/angular/angular-cli/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/angular/angular-cli/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/angular/angular-cli/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/angular/angular-cli/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/angular/angular-cli/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/angular/angular-cli/merges',
      archive_url:
        'https://api.github.com/repos/angular/angular-cli/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/angular/angular-cli/downloads',
      issues_url:
        'https://api.github.com/repos/angular/angular-cli/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/angular/angular-cli/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/angular/angular-cli/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/angular/angular-cli/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/angular/angular-cli/labels{/name}',
      releases_url:
        'https://api.github.com/repos/angular/angular-cli/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/angular/angular-cli/deployments',
      created_at: '2015-06-04T19:49:37Z',
      updated_at: '2023-09-29T21:39:01Z',
      pushed_at: '2023-09-30T01:33:49Z',
      git_url: 'git://github.com/angular/angular-cli.git',
      ssh_url: 'git@github.com:angular/angular-cli.git',
      clone_url: 'https://github.com/angular/angular-cli.git',
      svn_url: 'https://github.com/angular/angular-cli',
      homepage: 'https://cli.angular.io',
      size: 148467,
      stargazers_count: 26253,
      watchers_count: 26253,
      language: 'TypeScript',
      has_issues: true,
      has_projects: false,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      has_discussions: false,
      forks_count: 12136,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 278,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ['angular', 'angular-cli', 'cli', 'typescript'],
      visibility: 'public',
      forks: 12136,
      open_issues: 278,
      watchers: 26253,
      default_branch: 'main',
      score: 1,
    },
    {
      id: 62513582,
      node_id: 'MDEwOlJlcG9zaXRvcnk2MjUxMzU4Mg==',
      name: 'angular',
      full_name: 'formio/angular',
      private: false,
      owner: {
        login: 'formio',
        id: 11790256,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjExNzkwMjU2',
        avatar_url: 'https://avatars.githubusercontent.com/u/11790256?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/formio',
        html_url: 'https://github.com/formio',
        followers_url: 'https://api.github.com/users/formio/followers',
        following_url:
          'https://api.github.com/users/formio/following{/other_user}',
        gists_url: 'https://api.github.com/users/formio/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/formio/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/formio/subscriptions',
        organizations_url: 'https://api.github.com/users/formio/orgs',
        repos_url: 'https://api.github.com/users/formio/repos',
        events_url: 'https://api.github.com/users/formio/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/formio/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/formio/angular',
      description: 'JSON powered forms for Angular',
      fork: false,
      url: 'https://api.github.com/repos/formio/angular',
      forks_url: 'https://api.github.com/repos/formio/angular/forks',
      keys_url: 'https://api.github.com/repos/formio/angular/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/formio/angular/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/formio/angular/teams',
      hooks_url: 'https://api.github.com/repos/formio/angular/hooks',
      issue_events_url:
        'https://api.github.com/repos/formio/angular/issues/events{/number}',
      events_url: 'https://api.github.com/repos/formio/angular/events',
      assignees_url:
        'https://api.github.com/repos/formio/angular/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/formio/angular/branches{/branch}',
      tags_url: 'https://api.github.com/repos/formio/angular/tags',
      blobs_url: 'https://api.github.com/repos/formio/angular/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/formio/angular/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/formio/angular/git/refs{/sha}',
      trees_url: 'https://api.github.com/repos/formio/angular/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/formio/angular/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/formio/angular/languages',
      stargazers_url: 'https://api.github.com/repos/formio/angular/stargazers',
      contributors_url:
        'https://api.github.com/repos/formio/angular/contributors',
      subscribers_url:
        'https://api.github.com/repos/formio/angular/subscribers',
      subscription_url:
        'https://api.github.com/repos/formio/angular/subscription',
      commits_url: 'https://api.github.com/repos/formio/angular/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/formio/angular/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/formio/angular/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/formio/angular/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/formio/angular/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/formio/angular/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/formio/angular/merges',
      archive_url:
        'https://api.github.com/repos/formio/angular/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/formio/angular/downloads',
      issues_url: 'https://api.github.com/repos/formio/angular/issues{/number}',
      pulls_url: 'https://api.github.com/repos/formio/angular/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/formio/angular/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/formio/angular/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/formio/angular/labels{/name}',
      releases_url: 'https://api.github.com/repos/formio/angular/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/formio/angular/deployments',
      created_at: '2016-07-03T20:15:38Z',
      updated_at: '2023-09-29T18:07:24Z',
      pushed_at: '2023-09-29T16:03:19Z',
      git_url: 'git://github.com/formio/angular.git',
      ssh_url: 'git@github.com:formio/angular.git',
      clone_url: 'https://github.com/formio/angular.git',
      svn_url: 'https://github.com/formio/angular',
      homepage: 'https://formio.github.io/angular-demo',
      size: 16072,
      stargazers_count: 565,
      watchers_count: 565,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      has_discussions: true,
      forks_count: 447,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 326,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ['angular', 'forms', 'json-schema', 'serverless'],
      visibility: 'public',
      forks: 447,
      open_issues: 326,
      watchers: 565,
      default_branch: 'master',
      score: 1,
    },
    {
      id: 60701086,
      node_id: 'MDEwOlJlcG9zaXRvcnk2MDcwMTA4Ng==',
      name: 'angular',
      full_name: 'angulardart/angular',
      private: false,
      owner: {
        login: 'angulardart',
        id: 75800247,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjc1ODAwMjQ3',
        avatar_url: 'https://avatars.githubusercontent.com/u/75800247?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/angulardart',
        html_url: 'https://github.com/angulardart',
        followers_url: 'https://api.github.com/users/angulardart/followers',
        following_url:
          'https://api.github.com/users/angulardart/following{/other_user}',
        gists_url: 'https://api.github.com/users/angulardart/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/angulardart/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/angulardart/subscriptions',
        organizations_url: 'https://api.github.com/users/angulardart/orgs',
        repos_url: 'https://api.github.com/users/angulardart/repos',
        events_url: 'https://api.github.com/users/angulardart/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/angulardart/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/angulardart/angular',
      description: 'Fast and productive web framework provided by Dart',
      fork: false,
      url: 'https://api.github.com/repos/angulardart/angular',
      forks_url: 'https://api.github.com/repos/angulardart/angular/forks',
      keys_url:
        'https://api.github.com/repos/angulardart/angular/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/angulardart/angular/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/angulardart/angular/teams',
      hooks_url: 'https://api.github.com/repos/angulardart/angular/hooks',
      issue_events_url:
        'https://api.github.com/repos/angulardart/angular/issues/events{/number}',
      events_url: 'https://api.github.com/repos/angulardart/angular/events',
      assignees_url:
        'https://api.github.com/repos/angulardart/angular/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/angulardart/angular/branches{/branch}',
      tags_url: 'https://api.github.com/repos/angulardart/angular/tags',
      blobs_url:
        'https://api.github.com/repos/angulardart/angular/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/angulardart/angular/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/angulardart/angular/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/angulardart/angular/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/angulardart/angular/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/angulardart/angular/languages',
      stargazers_url:
        'https://api.github.com/repos/angulardart/angular/stargazers',
      contributors_url:
        'https://api.github.com/repos/angulardart/angular/contributors',
      subscribers_url:
        'https://api.github.com/repos/angulardart/angular/subscribers',
      subscription_url:
        'https://api.github.com/repos/angulardart/angular/subscription',
      commits_url:
        'https://api.github.com/repos/angulardart/angular/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/angulardart/angular/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/angulardart/angular/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/angulardart/angular/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/angulardart/angular/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/angulardart/angular/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/angulardart/angular/merges',
      archive_url:
        'https://api.github.com/repos/angulardart/angular/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/angulardart/angular/downloads',
      issues_url:
        'https://api.github.com/repos/angulardart/angular/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/angulardart/angular/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/angulardart/angular/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/angulardart/angular/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/angulardart/angular/labels{/name}',
      releases_url:
        'https://api.github.com/repos/angulardart/angular/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/angulardart/angular/deployments',
      created_at: '2016-06-08T13:45:10Z',
      updated_at: '2023-09-11T06:28:04Z',
      pushed_at: '2021-10-07T18:13:35Z',
      git_url: 'git://github.com/angulardart/angular.git',
      ssh_url: 'git@github.com:angulardart/angular.git',
      clone_url: 'https://github.com/angulardart/angular.git',
      svn_url: 'https://github.com/angulardart/angular',
      homepage: 'https://pub.dev/packages/angular',
      size: 44658,
      stargazers_count: 1855,
      watchers_count: 1855,
      language: 'Dart',
      has_issues: true,
      has_projects: false,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 246,
      mirror_url: null,
      archived: true,
      disabled: false,
      open_issues_count: 83,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [
        'angular',
        'angulardart',
        'dart',
        'dart-web',
        'dartlang',
        'web-framework',
      ],
      visibility: 'public',
      forks: 246,
      open_issues: 83,
      watchers: 1855,
      default_branch: 'master',
      score: 1,
    },
    {
      id: 10536180,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMDUzNjE4MA==',
      name: 'AngularJS-Learning',
      full_name: 'jmcunningham/AngularJS-Learning',
      private: false,
      owner: {
        login: 'jmcunningham',
        id: 4570610,
        node_id: 'MDQ6VXNlcjQ1NzA2MTA=',
        avatar_url: 'https://avatars.githubusercontent.com/u/4570610?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/jmcunningham',
        html_url: 'https://github.com/jmcunningham',
        followers_url: 'https://api.github.com/users/jmcunningham/followers',
        following_url:
          'https://api.github.com/users/jmcunningham/following{/other_user}',
        gists_url: 'https://api.github.com/users/jmcunningham/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/jmcunningham/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/jmcunningham/subscriptions',
        organizations_url: 'https://api.github.com/users/jmcunningham/orgs',
        repos_url: 'https://api.github.com/users/jmcunningham/repos',
        events_url:
          'https://api.github.com/users/jmcunningham/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/jmcunningham/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/jmcunningham/AngularJS-Learning',
      description:
        'A bunch of links to blog posts, articles, videos, etc for learning AngularJS',
      fork: false,
      url: 'https://api.github.com/repos/jmcunningham/AngularJS-Learning',
      forks_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/forks',
      keys_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/teams',
      hooks_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/hooks',
      issue_events_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/events',
      assignees_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/tags',
      blobs_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/languages',
      stargazers_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/stargazers',
      contributors_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/contributors',
      subscribers_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/subscribers',
      subscription_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/subscription',
      commits_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/merges',
      archive_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/downloads',
      issues_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/labels{/name}',
      releases_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/jmcunningham/AngularJS-Learning/deployments',
      created_at: '2013-06-06T20:48:17Z',
      updated_at: '2023-09-22T20:26:08Z',
      pushed_at: '2019-03-25T01:49:15Z',
      git_url: 'git://github.com/jmcunningham/AngularJS-Learning.git',
      ssh_url: 'git@github.com:jmcunningham/AngularJS-Learning.git',
      clone_url: 'https://github.com/jmcunningham/AngularJS-Learning.git',
      svn_url: 'https://github.com/jmcunningham/AngularJS-Learning',
      homepage: null,
      size: 1125,
      stargazers_count: 10748,
      watchers_count: 10748,
      language: null,
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      has_discussions: false,
      forks_count: 2078,
      mirror_url: null,
      archived: true,
      disabled: false,
      open_issues_count: 9,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 2078,
      open_issues: 9,
      watchers: 10748,
      default_branch: 'master',
      score: 1,
    },
    {
      id: 26634362,
      node_id: 'MDEwOlJlcG9zaXRvcnkyNjYzNDM2Mg==',
      name: 'angular',
      full_name: 'OOP-Code-Bunny/angular',
      private: false,
      owner: {
        login: 'OOP-Code-Bunny',
        id: 6986968,
        node_id: 'MDQ6VXNlcjY5ODY5Njg=',
        avatar_url: 'https://avatars.githubusercontent.com/u/6986968?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/OOP-Code-Bunny',
        html_url: 'https://github.com/OOP-Code-Bunny',
        followers_url: 'https://api.github.com/users/OOP-Code-Bunny/followers',
        following_url:
          'https://api.github.com/users/OOP-Code-Bunny/following{/other_user}',
        gists_url:
          'https://api.github.com/users/OOP-Code-Bunny/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/OOP-Code-Bunny/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/OOP-Code-Bunny/subscriptions',
        organizations_url: 'https://api.github.com/users/OOP-Code-Bunny/orgs',
        repos_url: 'https://api.github.com/users/OOP-Code-Bunny/repos',
        events_url:
          'https://api.github.com/users/OOP-Code-Bunny/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/OOP-Code-Bunny/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/OOP-Code-Bunny/angular',
      description: '所有angular学习过程中的代码',
      fork: false,
      url: 'https://api.github.com/repos/OOP-Code-Bunny/angular',
      forks_url: 'https://api.github.com/repos/OOP-Code-Bunny/angular/forks',
      keys_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/OOP-Code-Bunny/angular/teams',
      hooks_url: 'https://api.github.com/repos/OOP-Code-Bunny/angular/hooks',
      issue_events_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/issues/events{/number}',
      events_url: 'https://api.github.com/repos/OOP-Code-Bunny/angular/events',
      assignees_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/branches{/branch}',
      tags_url: 'https://api.github.com/repos/OOP-Code-Bunny/angular/tags',
      blobs_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/languages',
      stargazers_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/stargazers',
      contributors_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/contributors',
      subscribers_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/subscribers',
      subscription_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/subscription',
      commits_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/OOP-Code-Bunny/angular/merges',
      archive_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/downloads',
      issues_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/labels{/name}',
      releases_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/OOP-Code-Bunny/angular/deployments',
      created_at: '2014-11-14T10:45:33Z',
      updated_at: '2023-07-11T13:21:19Z',
      pushed_at: '2019-12-04T08:09:54Z',
      git_url: 'git://github.com/OOP-Code-Bunny/angular.git',
      ssh_url: 'git@github.com:OOP-Code-Bunny/angular.git',
      clone_url: 'https://github.com/OOP-Code-Bunny/angular.git',
      svn_url: 'https://github.com/OOP-Code-Bunny/angular',
      homepage: null,
      size: 13394,
      stargazers_count: 371,
      watchers_count: 371,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 339,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 1,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 339,
      open_issues: 1,
      watchers: 371,
      default_branch: 'master',
      score: 1,
    },
    {
      id: 51803340,
      node_id: 'MDEwOlJlcG9zaXRvcnk1MTgwMzM0MA==',
      name: 'Angular-GettingStarted',
      full_name: 'DeborahK/Angular-GettingStarted',
      private: false,
      owner: {
        login: 'DeborahK',
        id: 7987365,
        node_id: 'MDQ6VXNlcjc5ODczNjU=',
        avatar_url: 'https://avatars.githubusercontent.com/u/7987365?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/DeborahK',
        html_url: 'https://github.com/DeborahK',
        followers_url: 'https://api.github.com/users/DeborahK/followers',
        following_url:
          'https://api.github.com/users/DeborahK/following{/other_user}',
        gists_url: 'https://api.github.com/users/DeborahK/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/DeborahK/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/DeborahK/subscriptions',
        organizations_url: 'https://api.github.com/users/DeborahK/orgs',
        repos_url: 'https://api.github.com/users/DeborahK/repos',
        events_url: 'https://api.github.com/users/DeborahK/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/DeborahK/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/DeborahK/Angular-GettingStarted',
      description:
        'Sample Angular application used in the "Angular: Getting Started" course: http://bit.ly/Angular-GettingStarted',
      fork: false,
      url: 'https://api.github.com/repos/DeborahK/Angular-GettingStarted',
      forks_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/forks',
      keys_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/teams',
      hooks_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/hooks',
      issue_events_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/events',
      assignees_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/tags',
      blobs_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/languages',
      stargazers_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/stargazers',
      contributors_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/contributors',
      subscribers_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/subscribers',
      subscription_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/subscription',
      commits_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/merges',
      archive_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/downloads',
      issues_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/labels{/name}',
      releases_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/DeborahK/Angular-GettingStarted/deployments',
      created_at: '2016-02-16T02:56:05Z',
      updated_at: '2023-09-23T15:25:17Z',
      pushed_at: '2023-07-11T13:50:15Z',
      git_url: 'git://github.com/DeborahK/Angular-GettingStarted.git',
      ssh_url: 'git@github.com:DeborahK/Angular-GettingStarted.git',
      clone_url: 'https://github.com/DeborahK/Angular-GettingStarted.git',
      svn_url: 'https://github.com/DeborahK/Angular-GettingStarted',
      homepage: '',
      size: 1534,
      stargazers_count: 2509,
      watchers_count: 2509,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 3986,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 3,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 3986,
      open_issues: 3,
      watchers: 2509,
      default_branch: 'master',
      score: 1,
    },
    {
      id: 68956484,
      node_id: 'MDEwOlJlcG9zaXRvcnk2ODk1NjQ4NA==',
      name: 'angular-realworld-example-app',
      full_name: 'gothinkster/angular-realworld-example-app',
      private: false,
      owner: {
        login: 'gothinkster',
        id: 8601733,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjg2MDE3MzM=',
        avatar_url: 'https://avatars.githubusercontent.com/u/8601733?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/gothinkster',
        html_url: 'https://github.com/gothinkster',
        followers_url: 'https://api.github.com/users/gothinkster/followers',
        following_url:
          'https://api.github.com/users/gothinkster/following{/other_user}',
        gists_url: 'https://api.github.com/users/gothinkster/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/gothinkster/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/gothinkster/subscriptions',
        organizations_url: 'https://api.github.com/users/gothinkster/orgs',
        repos_url: 'https://api.github.com/users/gothinkster/repos',
        events_url: 'https://api.github.com/users/gothinkster/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/gothinkster/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/gothinkster/angular-realworld-example-app',
      description: 'Exemplary real world application built with Angular',
      fork: false,
      url: 'https://api.github.com/repos/gothinkster/angular-realworld-example-app',
      forks_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/forks',
      keys_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/teams',
      hooks_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/hooks',
      issue_events_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/events',
      assignees_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/tags',
      blobs_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/languages',
      stargazers_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/stargazers',
      contributors_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/contributors',
      subscribers_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/subscribers',
      subscription_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/subscription',
      commits_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/merges',
      archive_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/downloads',
      issues_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/labels{/name}',
      releases_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/gothinkster/angular-realworld-example-app/deployments',
      created_at: '2016-09-22T19:46:14Z',
      updated_at: '2023-09-27T15:59:34Z',
      pushed_at: '2023-08-31T07:12:41Z',
      git_url: 'git://github.com/gothinkster/angular-realworld-example-app.git',
      ssh_url: 'git@github.com:gothinkster/angular-realworld-example-app.git',
      clone_url:
        'https://github.com/gothinkster/angular-realworld-example-app.git',
      svn_url: 'https://github.com/gothinkster/angular-realworld-example-app',
      homepage: 'https://angular.realworld.how/',
      size: 2052,
      stargazers_count: 4931,
      watchers_count: 4931,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      has_discussions: false,
      forks_count: 2939,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 13,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ['angular'],
      visibility: 'public',
      forks: 2939,
      open_issues: 13,
      watchers: 4931,
      default_branch: 'main',
      score: 1,
    },
    {
      id: 14539434,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNDUzOTQzNA==',
      name: 'angular',
      full_name: 'scalyr/angular',
      private: false,
      owner: {
        login: 'scalyr',
        id: 1189709,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjExODk3MDk=',
        avatar_url: 'https://avatars.githubusercontent.com/u/1189709?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/scalyr',
        html_url: 'https://github.com/scalyr',
        followers_url: 'https://api.github.com/users/scalyr/followers',
        following_url:
          'https://api.github.com/users/scalyr/following{/other_user}',
        gists_url: 'https://api.github.com/users/scalyr/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/scalyr/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/scalyr/subscriptions',
        organizations_url: 'https://api.github.com/users/scalyr/orgs',
        repos_url: 'https://api.github.com/users/scalyr/repos',
        events_url: 'https://api.github.com/users/scalyr/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/scalyr/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/scalyr/angular',
      description: 'Code to optimize AngularJS for complex pages',
      fork: false,
      url: 'https://api.github.com/repos/scalyr/angular',
      forks_url: 'https://api.github.com/repos/scalyr/angular/forks',
      keys_url: 'https://api.github.com/repos/scalyr/angular/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/scalyr/angular/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/scalyr/angular/teams',
      hooks_url: 'https://api.github.com/repos/scalyr/angular/hooks',
      issue_events_url:
        'https://api.github.com/repos/scalyr/angular/issues/events{/number}',
      events_url: 'https://api.github.com/repos/scalyr/angular/events',
      assignees_url:
        'https://api.github.com/repos/scalyr/angular/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/scalyr/angular/branches{/branch}',
      tags_url: 'https://api.github.com/repos/scalyr/angular/tags',
      blobs_url: 'https://api.github.com/repos/scalyr/angular/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/scalyr/angular/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/scalyr/angular/git/refs{/sha}',
      trees_url: 'https://api.github.com/repos/scalyr/angular/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/scalyr/angular/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/scalyr/angular/languages',
      stargazers_url: 'https://api.github.com/repos/scalyr/angular/stargazers',
      contributors_url:
        'https://api.github.com/repos/scalyr/angular/contributors',
      subscribers_url:
        'https://api.github.com/repos/scalyr/angular/subscribers',
      subscription_url:
        'https://api.github.com/repos/scalyr/angular/subscription',
      commits_url: 'https://api.github.com/repos/scalyr/angular/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/scalyr/angular/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/scalyr/angular/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/scalyr/angular/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/scalyr/angular/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/scalyr/angular/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/scalyr/angular/merges',
      archive_url:
        'https://api.github.com/repos/scalyr/angular/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/scalyr/angular/downloads',
      issues_url: 'https://api.github.com/repos/scalyr/angular/issues{/number}',
      pulls_url: 'https://api.github.com/repos/scalyr/angular/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/scalyr/angular/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/scalyr/angular/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/scalyr/angular/labels{/name}',
      releases_url: 'https://api.github.com/repos/scalyr/angular/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/scalyr/angular/deployments',
      created_at: '2013-11-19T22:06:53Z',
      updated_at: '2023-09-08T11:10:41Z',
      pushed_at: '2022-03-07T23:19:14Z',
      git_url: 'git://github.com/scalyr/angular.git',
      ssh_url: 'git@github.com:scalyr/angular.git',
      clone_url: 'https://github.com/scalyr/angular.git',
      svn_url: 'https://github.com/scalyr/angular',
      homepage: null,
      size: 288,
      stargazers_count: 850,
      watchers_count: 850,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 200,
      mirror_url: null,
      archived: true,
      disabled: false,
      open_issues_count: 12,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 200,
      open_issues: 12,
      watchers: 850,
      default_branch: 'master',
      score: 1,
    },
  ];

  mockItems: string[] = [];
  constructor() {}

  ngOnInit(): void {
    this.mockItems = Array.from({ length: 10 }).map((_, i) => `Item #${i}`);
    console.log(this.mockItems);
  }

  onScroll() {}
}
