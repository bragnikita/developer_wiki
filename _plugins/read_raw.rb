module Wiki
  def read_raw(static_file)
    path = static_file
    File.open(File.expand_path(path, Dir.pwd), 'r:UTF-8').read
  end
end
Liquid::Template.register_filter(Wiki)
