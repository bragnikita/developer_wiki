---
categories: capistrano, rails
---
# Capistrano hints

`bundle exec cap install` - creates template _deploy.rb_ , _state.rb_ , _Capfile_
`bundle exec cap <stage> <task>` - run cap task on the configuration <stage>


# Capistrano Rails tasks reference



`bundle exec cap <stage> --tasks`

```
cap bundler:clean                  # Remove unused gems intalled by bundler
cap bundler:install                # Install the current Bundler environment
cap bundler:map_bins               # Maps all binaries to use `bundle exec` by default
cap delayed_job:restart            # Restart the delayed_job process
cap delayed_job:start              # Start the delayed_job process
cap delayed_job:status             # Status of the delayed_job process
cap delayed_job:stop               # Stop the delayed_job process
cap deploy                         # Deploy a new release
cap deploy:check                   # Check required files and directories exist
cap deploy:check:directories       # Check shared and release directories exist
cap deploy:check:linked_dirs       # Check directories to be linked exist in shared
cap deploy:check:linked_files      # Check files to be linked exist in shared
cap deploy:check:make_linked_dirs  # Check directories of files to be linked exist in shared
cap deploy:cleanup                 # Clean up old releases
cap deploy:cleanup_rollback        # Remove and archive rolled-back release
cap deploy:finished                # Finished
cap deploy:finishing               # Finish the deployment, clean up server(s)
cap deploy:finishing_rollback      # Finish the rollback, clean up server(s)
cap deploy:log_revision            # Log details of the deploy
cap deploy:migrate                 # Runs rake db:migrate if migrations are set
cap deploy:migrating               # Runs rake db:migrate
cap deploy:published               # Published
cap deploy:publishing              # Publish the release
cap deploy:revert_release          # Revert to previous release timestamp
cap deploy:reverted                # Reverted
cap deploy:reverting               # Revert server(s) to previous release
cap deploy:rollback                # Rollback to previous release
cap deploy:set_current_revision    # Place a REVISION file with the current revision SHA in the current release path
cap deploy:started                 # Started
cap deploy:starting                # Start a deployment, make sure server(s) ready
cap deploy:symlink:linked_dirs     # Symlink linked directories
cap deploy:symlink:linked_files    # Symlink linked files
cap deploy:symlink:release         # Symlink release to current
cap deploy:symlink:shared          # Symlink files and directories from shared to release
cap deploy:updated                 # Updated
cap deploy:updating                # Update server(s) by setting up a new release
cap doctor                         # Display a Capistrano troubleshooting report (all doctor: tasks)
cap doctor:environment             # Display Ruby environment details
cap doctor:gems                    # Display Capistrano gem versions
cap doctor:servers                 # Display the effective servers configuration
cap doctor:variables               # Display the values of all Capistrano variables
cap git_copy:check                 # Check that the repository is reachable
cap git_copy:cleanup               # Clean repo cache
cap git_copy:clone                 # Clone the repo to the cache
cap git_copy:create_release        # Copy repo to releases
cap git_copy:set_current_revision  # Determine the revision that will be deployed
cap git_copy:update                # Update the repo mirror to reflect the origin state
cap install                        # Install Capistrano, cap install STAGES=staging,production
cap puma:config                    # Setup Puma config file
cap puma:halt                      # halt puma
cap puma:phased-restart            # phased-restart puma
cap puma:restart                   # restart puma
cap puma:start                     # Start puma
cap puma:status                    # status puma
cap puma:stop                      # stop puma
```
